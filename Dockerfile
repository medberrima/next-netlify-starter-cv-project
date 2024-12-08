# Step 1: Use an official Node.js image as the base image
FROM node:18 AS builder

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install --production

# Step 5: Copy the rest of the app code
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Prepare the production stage
FROM node:18-slim

# Step 8: Set the working directory
WORKDIR /app

# Step 9: Copy the build files from the builder image
COPY --from=builder /app ./

# Step 10: Install only production dependencies
RUN npm install --production

# Step 11: Expose the port
EXPOSE 3000

# Step 12: Start the Next.js app in production mode
CMD ["npm", "start"]

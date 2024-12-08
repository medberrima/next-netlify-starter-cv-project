import React from 'react';

const educationData = [
  {
    degree: 'Mastère Professionnel en Ingénierie du Logiciel, Ingénierie informatique',
    institution: 'Higher Institute of Computer Science - Tunisia (ISI)',
    date: 'Sept. 2023 - Présent'
  },
  {
    degree: 'Technologie Informatique, Développement de systèmes d\'information',
    institution: 'Institut supérieur des études technologique de Nabeul',
    date: 'Janv. 2019 - Juil. 2022'
  }
];

export default function Education() {
  return (
    <section>
      <h2>Formation</h2>
      {educationData.map((item, index) => (
        <div key={index}>
          <h3>{item.degree}</h3>
          <p>{item.institution}, {item.date}</p>
        </div>
      ))}
    </section>
  );
}

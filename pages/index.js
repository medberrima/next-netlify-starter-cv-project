import React from 'react';
import Header from '../components/Header';
import PersonalInfo from '../components/PersonalInfo';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <PersonalInfo />
      <Skills />
      <Experience />
      <Education />
      <Footer />
    </div>
  );
}

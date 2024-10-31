// App.tsx
import React from 'react';
import Contact from "./Components/Contact";
import Experiences from "./Components/Experiences";
import Header from "./Components/Student";
import Projects from "./Components/Projects";
import CreateProject from "./Components/CreateProject";
import './App.css';
import useProjects  from './hooks/useprojects'; // Sørg for at dette er riktig
import { STUDENT_INFO } from './config';
import Layout from './Components/Layout';

function App() {
  const { projects, handleAddProject, removeProject } = useProjects();

  return (
    <Layout>
      <Header 
        student={STUDENT_INFO.student}
        degree={STUDENT_INFO.degree}
        credits={STUDENT_INFO.credits} 
      />
      <Experiences />
      <Contact email={""} />
      <Projects projects={projects} removeProject={removeProject} />
      <CreateProject onAddProject={handleAddProject} />
    </Layout>
  );
}

export default App;

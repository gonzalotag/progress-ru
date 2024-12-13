import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExerciseTemplate from './components/ExerciseTemplate';
import VistaEstudiante from './components/VistaEstudiante';
import PerfilEstudiante from './components/PerfilEstudiante';
import ClassroomPage from './components/ClassroomPage';
import { ActivityProvider } from './context/ActivityContext';

function App() {
  return (
    <ActivityProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise-template" element={<ExerciseTemplate />} />
          <Route path="/vista-estudiante" element={<VistaEstudiante />} />
          <Route path="/perfil-estudiante" element={<PerfilEstudiante />} />
          <Route path="/classroom" element={<ClassroomPage />} />
        </Routes>
      </Router>
    </ActivityProvider>
  );
}

export default App;
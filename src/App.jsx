// import React from 'react';
// import ExerciseTemplate from './components/ExerciseTemplate';

// function App() {
//   return <ExerciseTemplate />;
// }

// export default App;
// App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ExerciseTemplate from './components/ExerciseTemplate';
import VistaEstudiante from './components/VistaEstudiante';
import PerfilEstudiante from './components/PerfilEstudiante';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exercise-template" element={<ExerciseTemplate />} />
        <Route path="/vista-estudiante" element={<VistaEstudiante />} />
        <Route path="/perfil-estudiante" element={<PerfilEstudiante />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
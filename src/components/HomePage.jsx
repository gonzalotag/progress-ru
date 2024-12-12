// components/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Bienvenido a la página de inicio</h1>
      <div className="flex flex-row justify-center space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/exercise-template')}
        >
          Ir a Exercise Template
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/vista-estudiante')}
        >
          Ir a Vista Estudiante
        </button>
      </div>
    </div>
  );
}

export default HomePage;
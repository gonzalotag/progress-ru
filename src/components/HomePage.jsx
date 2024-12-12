import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaArrowRight } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

function HomePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [classes, setClasses] = useState([
    { id: '1234567', name: 'Math 101' },
    { id: '2345678', name: 'Science 202' },
    { id: '3456789', name: 'History 303' },
  ]); // Ejemplo de clases

  const handleCreateClass = () => {
    // Lógica para crear una nueva clase (puedes implementar un modal o un formulario)
    alert('Crear nueva clase');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl border border-gray-900">
        <h1 className="text-2xl font-bold mb-4 text-center">Online Lessons</h1>
        
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className="bg-[#FEAB5F] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border border-gray-900"
            onClick={() => navigate('/exercise-template')}
          >
            Ir a Exercise Template
          </button>
          <button
            className="bg-[#FEAB5F] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border border-gray-900"
            onClick={() => navigate('/vista-estudiante')}
          >
            Ir a Vista Estudiante
          </button>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Searching for classes"
            className="border border-gray-300 rounded-l py-2 px-4 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-gray-100 rounded-r py-2 px-4 border border-gray-900 hover:bg-gray-200">
            <FaSearch />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-2">Number of Classes: {classes.length}</h2>
        
        <button
          className="bg-[#FEAB5F] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mb-4 w-full border border-gray-900"
          onClick={handleCreateClass}
        >
          + Create New Class
        </button>

        <ul className="list-disc pl-5">
          {classes.map((classItem, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <div>
                <strong>{classItem.name}</strong> <br />
                <span className="text-gray-600">ID: {classItem.id}</span>
              </div>
              <button className="bg-[#FEAB5F] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded border border-gray-900 flex items-center">
                <FaArrowRight className="mr-1" />
                Enter Classroom
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
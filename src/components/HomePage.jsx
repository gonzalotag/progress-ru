import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaArrowRight } from 'react-icons/fa';
import CreateClassModal from './CreateClassModal';

function HomePage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [classes, setClasses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateClass = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleAddClass = (newClass) => {
    setClasses(prevClasses => [...prevClasses, newClass]);
  };

  const handleEnterClassroom = (classId) => {
    navigate('/classroom'); // Redirigir a ClassroomPage
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white pt-16 pb-16">
      <div className="bg-white shadow-2xl rounded-lg p-6 w-full max-w-3xl h-5/6">
        <h1 className="text-2xl font-bold mb-4 text-center">Online Lessons</h1>
        
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className="bg-[#FEAB5F] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={() => navigate('/exercise-template')}
          >
            Ir a Vista Profesor
          </button>
          <button
            className="bg-[#FEAB5F] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
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
          <button className="bg-gray-100 rounded-r py-2 px-4 hover:bg-gray-200 transition duration-300 ease-in-out">
            <FaSearch />
          </button>
        </div>

        <h2 className="text-xl font-semibold mb-2">Number of Classes: {classes.length}</h2>
        
        <button
          className="bg-[#FEAB5F] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mb-4 w-full transition duration-300 ease-in-out"
          onClick={handleCreateClass}
        >
          + Create New Class
        </button>

        <ul className="list-disc pl-5">
          {classes.map((classItem, index) => (
            <li key={index} className="flex items-start mb-4">
              {classItem.imagen && (
                <img src={classItem.imagen} alt="Clase" className="w-16 h-16 mr-4 rounded" />
              )}
              <div className="flex-1">
                <strong>{classItem.name}</strong>
                <p className="text-gray-600">{classItem.description}</p>
                <div className="flex justify-between">
                  <span className="text-gray-600">Lengua: {classItem.lengua}</span>
                  <span className="text-gray-600">Estudiantes: {classItem.students}</span>
                  <span className="text-gray-600">Duración: {classItem.duration}</span>
                </div>
              </div>
              <button 
                className="bg-[#FEAB5F] hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center"
                onClick={() => handleEnterClassroom(classItem.id)} 
              >
                <FaArrowRight className="mr-1" />
                Enter Classroom
              </button>
            </li>
          ))}
        </ul>
      </div>

      <CreateClassModal isOpen={isModalOpen} onClose={handleModalClose} onAddClass={handleAddClass} /> 
    </div>
  );
}

export default HomePage;
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormularioRegistroEstudiante from './FormularioRegistroEstudiante'
import PerfilEstudiante from './PerfilEstudiante';

export default function VistaEstudiante() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showPerfil, setShowPerfil] = useState(false);

  const handleCreateStudent = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }
  const handleShowPerfil = () => {
    setShowPerfil(true);
  };

  const handleClosePerfil = () => {
    setShowPerfil(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Student</h1>
        
        <div className="flex flex-col items-center mb-4">
          <input
            type="text"
            placeholder="Buscar estudiante"
            className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
          />
        </div>
        
        <div className="flex flex-col items-center mb-4">
          <p className="text-lg font-bold text-gray-900">Número de estudiantes (10)</p>
        </div>
        
        <div className="flex flex-col items-center mb-4">
          <button
            className="w-full p-2 bg-[#FEAB5F] text-white font-bold rounded-md hover:bg-[#FE9B3F] transition-colors flex justify-center items-center"
            onClick={handleCreateStudent}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Create New Student
          </button>
        </div>
        
        {showModal && (
          <FormularioRegistroEstudiante
            onClose={handleCloseModal}
          />
        )}
        
        <div className="flex flex-col items-center mb-4 w-full">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Estudiantes registrados</h2>
          <ul className="list-none p-0 m-0 w-full">
            <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-[#FEAB5F] mb-2 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900">John Doe</h3>
                <p className="text-gray-600">Edad: 20</p>
              </div>
              <button className="bg-[#FEAB5F] text-white font-bold py-1 px-3 rounded"onClick={handleShowPerfil}>
                Student Profile
              </button>
              {showPerfil && (
                    <PerfilEstudiante onClose={handleClosePerfil} />
                )}
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-[#FEAB5F] mb-2 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Jane Doe</h3>
                <p className="text-gray-600">Edad: 22</p>
              </div>
              <button className="bg-[#FEAB5F] text-white font-bold py-1 px-3 rounded"onClick={handleShowPerfil}>
                Student Profile
              </button>
              
            </li>
            <li className="bg-white p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-[#FEAB5F] mb-2 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900">Juan Pérez</h3>
                <p className="text-gray-600">Edad: 25</p>
              </div>
              <button className="bg-[#FEAB5F] text-white font-bold py-1 px-3 rounded" onClick={handleShowPerfil}>
                    Student Profile
                </button>
                
            </li>
          </ul>
        </div>
      </div>
      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => navigate(-1)}
      >
        Regresar a la página de inicio
      </button>
    </div>
  )
}
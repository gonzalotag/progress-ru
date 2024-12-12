import React from 'react'

export default function PerfilEstudiante({ onClose }) {
  const handleRegresar = () => {
    onClose();
  }

  const handleAgregarFoto = () => {
    console.log("Agregar foto de perfil");
  }

  const handleEditar = () => {
    console.log("Editar perfil del estudiante");
  }

  const handleAgregarClase = () => {
    // Aquí puedes agregar la lógica para agregar una clase al estudiante
    console.log("Agregar clase al estudiante");
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={handleRegresar}
        >
          Regresar a Vista Estudiante
        </button>
        <div className="flex justify-center mb-4">
          <div className="w-1/2">
            <button
              className="bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded"
              onClick={handleAgregarFoto}
            >
              Agregar Foto de Perfil
            </button>
          </div>
          <div className="w-1/2 flex justify-end">
            <img
              src="https://via.placeholder.com/100"
              alt="Foto de Perfil"
              className="w-20 h-20 rounded-full"
            />
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">John Doe</h2>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l9 20-9 20-9-20 9-20z" />
            </svg>
            <p className="text-gray-600">ID: 12345</p>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
          <button
            className="bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded"
            onClick={handleEditar}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2l9 20-9 20-9-20 9-20z" />
            </svg>
            Editar
          </button>
        </div>
        <p className="text-gray-600 mb-4">Student doesn't have classes, add a class to start learning</p>
        <button
          className="bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded"
          onClick={handleAgregarClase}
        >
          Agregar Clase
        </button>
      </div>
    </div>
  )
}
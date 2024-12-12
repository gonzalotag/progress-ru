import React from 'react'

export default function FormularioRegistroEstudiante({ onClose }) {
  const handleCreate = () => {
    console.log("Crear estudiante");
    onClose();
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-md w-1/2">
        <h2 className="text-lg font-bold text-gray-900 mb-2">Create Student</h2>
        <form>
          <div className="mb-4">
            <label className="text-gray-900">Mail:</label>
            <input
              type="email"
              placeholder="Ingrese correo electrónico"
              className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-900">Telephone:</label>
            <input
              type="text"
              placeholder="Ingrese número de teléfono"
              className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-900">Name:</label>
            <input
              type="text"
              placeholder="Ingrese nombre"
              className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
            />
          </div>
          <div className="mb-4">
            <label className="text-gray-900">Native Language:</label>
            <select
              className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
            >
              <option value="ingles">Inglés</option>
              <option value="frances">Francés</option>
              <option value="ruso">Ruso</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-[#FEAB5F] hover:bg-[#FE9B3F] text-white font-bold py-2 px-4 rounded"
              onClick={handleCreate}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
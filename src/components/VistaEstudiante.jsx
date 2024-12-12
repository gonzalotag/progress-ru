import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function VistaEstudiante() {
    const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Ejercicios Disponibles</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((ejercicio) => (
            <div
              key={ejercicio}
              className="bg-white text-gray-900 p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-[#FEAB5F]"
            >
              <h3 className="text-lg font-semibold mb-2 text-[#FEAB5F]">Ejercicio {ejercicio}</h3>
              <p className="text-gray-600">Descripción breve del ejercicio {ejercicio}</p>
              <button className="mt-4 px-4 py-2 bg-[#FEAB5F] text-white rounded-md hover:bg-[#FE9B3F] transition-colors">
                Comenzar
              </button>
            </div>
          ))}
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
import React, { useState } from 'react'
import ImageModal from './ImageModal'

const plantillasEjercicios = [
  { id: 1, nombre: 'Image', descripcion: 'Ejercicios basados en imágenes' },
  { id: 2, nombre: 'Gif-Animation', descripcion: 'Ejercicios con animaciones GIF' },
  { id: 3, nombre: 'Video', descripcion: 'Ejercicios utilizando videos' },
  { id: 4, nombre: 'Fill in the blanks with words from the list', descripcion: 'Completar espacios con palabras de una lista' },
  { id: 5, nombre: 'Test', descripcion: 'Examen de opción múltiple' },
  { id: 6, nombre: 'Article, essay or text', descripcion: 'Ejercicios basados en artículos o textos' },
  { id: 7, nombre: 'Audio', descripcion: 'Ejercicios de comprensión auditiva' },
  { id: 8, nombre: 'Fill in the blanks', descripcion: 'Completar espacios en blanco' },
]

export default function CrearEjercicio() {
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState('')
  const [modalAbierto, setModalAbierto] = useState(false)

  const abrirModal = () => setModalAbierto(true)
  const cerrarModal = () => setModalAbierto(false)

  const manejarClickPlantilla = (id) => {
    setPlantillaSeleccionada(id.toString())
    if (id === 1) {
      abrirModal()
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#FEAB5F]">Create New Exercise</h1>
        
        <div className="mb-6">
          <label htmlFor="exercise-template" className="block text-sm font-medium mb-2 text-[#FEAB5F]">
            Exercise Template
          </label>
          <select
            id="exercise-template"
            className="w-full p-2 bg-gray-100 text-gray-900 border border-[#FEAB5F] rounded-md shadow-sm focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
            value={plantillaSeleccionada}
            onChange={(e) => setPlantillaSeleccionada(e.target.value)}
          >
            <option value="">Select a template</option>
            {plantillasEjercicios.map((plantilla) => (
              <option key={plantilla.id} value={plantilla.id}>
                {plantilla.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plantillasEjercicios.map((plantilla) => (
            <div
              key={plantilla.id}
              className="bg-gray-100 text-gray-900 p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 cursor-pointer border-2 border-transparent hover:border-[#FEAB5F]"
              onClick={() => manejarClickPlantilla(plantilla.id)}
            >
              <h3 className="text-lg font-semibold mb-2 text-[#FEAB5F]">{plantilla.nombre}</h3>
              <p className="text-gray-600">{plantilla.descripcion}</p>
            </div>
          ))}
        </div>
      </div>

      <ImageModal isOpen={modalAbierto} onClose={cerrarModal} />
    </div>
  )
}


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageModal from './ImageModal';
import AudioModal from './AudioModal';
import FillInTheBlanksModal from './FillTheBlanksModal';
import RecordAudioModal from './RecordAudioModal';

const plantillasEjercicios = [
  { id: 1, nombre: 'Image', descripcion: 'Ejercicios basados en imágenes' },
  { id: 2, nombre: 'Gif-Animation', descripcion: 'Ejercicios con animaciones GIF' },
  { id: 3, nombre: 'Video', descripcion: 'Ejercicios utilizando videos' },
  { id: 4, nombre: 'Fill in the blanks with words from the list', descripcion: 'Completar espacios con palabras de una lista' },
  { id: 5, nombre: 'Test', descripcion: 'Examen de opción múltiple' },
  { id: 6, nombre: 'Article, essay or text', descripcion: 'Ejercicios basados en artículos o textos' },
  { id: 7, nombre: 'Audio', descripcion: 'Ejercicios de comprensión auditiva' },
  { id: 8, nombre: 'Fill in the blanks', descripcion: 'Completar espacios en blanco' },
  { id: 9, nombre: 'Record Audio', descripcion: 'Grabar audio para ejercicios de pronunciación' },
];

export default function CrearEjercicio() {
  const navigate = useNavigate();
  const [plantillaSeleccionada, setPlantillaSeleccionada] = useState('');
  const [modalImagenAbierto, setModalImagenAbierto] = useState(false);
  const [modalAudioAbierto, setModalAudioAbierto] = useState(false);
  const [modalFillInTheBlanksAbierto, setModalFillInTheBlanksAbierto] = useState(false);
  const [modalRecordAudioAbierto, setModalRecordAudioAbierto] = useState(false);

  const abrirModalImagen = () => setModalImagenAbierto(true);
  const cerrarModalImagen = () => setModalImagenAbierto(false);
  const abrirModalAudio = () => setModalAudioAbierto(true);
  const cerrarModalAudio = () => setModalAudioAbierto(false);
  const abrirModalFillInTheBlanks = () => setModalFillInTheBlanksAbierto(true);
  const cerrarModalFillInTheBlanks = () => setModalFillInTheBlanksAbierto(false);
  const abrirModalRecordAudio = () => setModalRecordAudioAbierto(true);
  const cerrarModalRecordAudio = () => setModalRecordAudioAbierto(false);

  const manejarClickPlantilla = (id) => {
    setPlantillaSeleccionada(id.toString());
    if (id === 1) {
      abrirModalImagen();
    } else if (id === 7) {
      abrirModalAudio();
    } else if (id === 8) {
      abrirModalFillInTheBlanks();
    } else if (id === 9) {
      abrirModalRecordAudio();
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Create New Exercise</h1>

        <div className="mb-6">
          <label htmlFor="exercise-template" className="block text-sm font-medium mb-2 text-gray-700">
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
            className="bg-white text-gray-900 p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-[#FEAB5F]"
            onClick={() => manejarClickPlantilla(plantilla.id)}
          >
            <h3 className="text-lg font-semibold mb-2 text-[#FEAB5F]">{plantilla.nombre}</h3>
            <p className="text-gray-600">{plantilla.descripcion}</p>
          </div>
          ))}
          </div>
          </div>
          
          <ImageModal isOpen={modalImagenAbierto} onClose={cerrarModalImagen} />
          <AudioModal isOpen={modalAudioAbierto} onClose={cerrarModalAudio} />
          <FillInTheBlanksModal isOpen={modalFillInTheBlanksAbierto} onClose={cerrarModalFillInTheBlanks} />
          <RecordAudioModal isOpen={modalRecordAudioAbierto} onClose={cerrarModalRecordAudio} />
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
            onClick={() => navigate(-1)}
          >
            Regresar a la página de inicio
          </button>
          </div>
          );
          }


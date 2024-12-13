import React, { useState, useContext } from 'react';
import { ActivityContext } from '../context/ActivityContext';
import ImageModal from './ImageModal';
import AudioModal from './AudioModal';
import FillInTheBlanksModal from './FillTheBlanksModal';
import RecordAudioModal from './RecordAudioModal';

const plantillasEjercicios = [
  { id: 1, nombre: 'Image', descripcion: 'Ejercicios basados en imágenes' },
  { id: 7, nombre: 'Audio', descripcion: 'Ejercicios de comprensión auditiva' },
  { id: 8, nombre: 'Fill in the blanks', descripcion: 'Completar espacios en blanco' },
  { id: 9, nombre: 'Record Audio', descripcion: 'Grabar audio para ejercicios de pronunciación' },
];

const CrearEjercicioModal = ({ isOpen, onClose }) => {
  const { setActivities } = useContext(ActivityContext);
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

  const agregarActividad = (actividad) => {
    const nuevaActividad = {
      nombre: actividad.nombre,
      imagen: actividad.imagen,
    };
    setActivities(prevActivities => [...prevActivities, nuevaActividad]);
  };

  const manejarGuardarActividad = (imagenSeleccionada) => {
    const actividad = {
      nombre: 'Nueva Actividad de Imagen',
      imagen: imagenSeleccionada,
    };
    agregarActividad(actividad);
    cerrarModalImagen();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <h1 className="text-3xl font-bold mb-4">Create New Exercise</h1>
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

        <ImageModal isOpen={modalImagenAbierto} onClose={cerrarModalImagen} onSave={manejarGuardarActividad} />
        <AudioModal isOpen={modalAudioAbierto} onClose={cerrarModalAudio} />
        <FillInTheBlanksModal isOpen={modalFillInTheBlanksAbierto} onClose={cerrarModalFillInTheBlanks} />
        <RecordAudioModal isOpen={modalRecordAudioAbierto} onClose={cerrarModalRecordAudio} />

        <button
          className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default CrearEjercicioModal;
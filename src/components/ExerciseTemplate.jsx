import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActivityContext } from '../context/ActivityContext'; // Importar el contexto
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

export default function CrearEjercicio() {
  const navigate = useNavigate();
  const { setActivities } = useContext(ActivityContext); // Obtener la función para establecer actividades
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

  const agregarActividadImagen = (actividad) => {
    const nuevaActividad = {
      nombre: actividad.nombre, // Asegúrate de que 'nombre' sea una propiedad válida
      imagen: actividad.imagen, // Agregar la imagen a la actividad
    };
    setActivities(prevActivities => [...prevActivities, nuevaActividad]); // Agregar la nueva actividad
  };

  const agregarActividadAudio = (actividad) => {
    const nuevaActividad = {
      nombre: actividad.audioName, // Nombre del audio
      audio: actividad.audioFile, // Archivo de audio
    };
    setActivities(prevActivities => [...prevActivities, nuevaActividad]); // Agregar la nueva actividad
  };

  const agregarActividadFillInTheBlanks = (actividad) => {
    const nuevaActividad = {
      nombre: actividad.task, // Tarea
      textoEjercicio: actividad.exerciseText, // Texto del ejercicio
    };
    setActivities(prevActivities => [...prevActivities, nuevaActividad]); // Agregar la nueva actividad
  };

  const agregarActividadRecordAudio = (actividad) => {
    const nuevaActividad = {
      nombre: actividad.taskName, // Nombre de la tarea
      descripcion: actividad.description, // Descripción
      duracion: actividad.duration, // Duración
      audio: actividad.audioBlob, // Blob de audio grabado
    };
    setActivities(prevActivities => [...prevActivities, nuevaActividad]); // Agregar la nueva actividad
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Create New Exercise</h1>

        <div className="mb-6">
          <label htmlFor=" exercise-template" className="block text-sm font-medium mb-2 text-gray-700">
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

      <ImageModal isOpen={modalImagenAbierto} onClose={cerrarModalImagen} onSave={agregarActividadImagen} />
      <AudioModal isOpen={modalAudioAbierto} onClose={cerrarModalAudio} onSave={agregarActividadAudio} />
      <FillInTheBlanksModal isOpen={modalFillInTheBlanksAbierto} onClose={cerrarModalFillInTheBlanks} onSave={agregarActividadFillInTheBlanks} />
      <RecordAudioModal isOpen={modalRecordAudioAbierto} onClose={cerrarModalRecordAudio} onSave={agregarActividadRecordAudio} />

      <button
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => navigate('/')}
      >
        Regresar a la página de inicio
      </button>
    </div>
  );
}
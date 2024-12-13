import React, { useState, useContext } from 'react';
import { ActivityContext } from '../context/ActivityContext'; // Importar el contexto

const RecordAudioModal = ({ isOpen, onClose }) => {
  const { agregarActividad } = useContext(ActivityContext); // Obtener la función para agregar actividad
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(30);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [mediaRecorder, setMediaRecorder] = useState(null);

  // const handleStartRecording = () => {
  //   setIsRecording(true);
  //   navigator.mediaDevices.getUser Media({ audio: true }) // Corregido: getUser Media sin espacio
  //     .then(stream => {
  //       const recorder = new MediaRecorder(stream);
  //       recorder.ondataavailable = event => {
  //         setAudioBlob(event.data);
  //       };
  //       recorder.start();
  //       setMediaRecorder(recorder);
  //     })
  //     .catch(error => console.error('Error al iniciar la grabación:', error));
  // };

  // const handleStopRecording = () => {
  //   if (mediaRecorder) {
  //     mediaRecorder.stop();
  //     setIsRecording(false);
  //     mediaRecorder.stream.getTracks().forEach(track => track.stop()); // Detener el stream
  //   }
  // };

  const handleSave = () => {
    if (taskName && description && audioBlob) {
      const audioFile = new File([audioBlob], `${taskName}.webm`, { type: 'audio/webm' });
      agregarActividad({ taskName, description, duration, audio: audioFile }); // Agregar la actividad directamente
      onClose(); // Cerrar el modal
    } else {
      alert("Por favor, completa todos los campos antes de guardar.");
    }
  };

  const handleCancel = () => {
    setTaskName('');
    setDescription('');
    setAudioBlob(null);
    setIsRecording(false);
    onClose();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-gray-100 rounded-lg shadow-md p-4 w-1/2">
        <h2 className="text-lg font-bold mb-2">Create New Exercise</h2>
        <div className="mb-4">
          <label className="block text-lg font-bold">Task Name</label>
          <input
            type="text"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
            className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
            placeholder="Enter task name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold">Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
            placeholder="Enter task description"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-bold">Duration (seconds)</label>
          <input
            type="number"
            value={duration}
            onChange={e => setDuration(e.target.value)}
            className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
            min="1"
          />
        </div>
        <div className="mb-4">
          <button
            className={`bg-[#FEAB5F] hover:bg-[#FE9B3F] text-white font-bold py-2 px-4 rounded ${isRecording ? 'hidden' : 'block'}`}
            // onClick={handleStartRecording}
          >
            Start Recording
          </button>
          <button
            className={`bg-[#FEAB5F] hover:bg-[#FE9B3F] text-white font-bold py-2 px-4 rounded ${isRecording ? 'block' : 'hidden'}`}
            // onClick={handleStopRecording}
          >
                      Stop Recording
          </button>
        </div>
        <div className="flex justify-between mb-4">
          <button
            className="bg-[#FEAB5F] hover:bg-[#FE9B3F] text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Guardar
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecordAudioModal;
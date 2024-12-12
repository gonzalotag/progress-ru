import React, { useState } from 'react';

const RecordAudioModal = ({ isOpen, onClose }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(30);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);

  const handleStartRecording = () => {
    setIsRecording(true);
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.ondataavailable = event => {
          setAudioBlob(event.data);
        };
        mediaRecorder.start();
      })
      .catch(error => console.error('Error al iniciar la grabación:', error));
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        stream.getTracks().forEach(track => track.stop());
      })
      .catch(error => console.error('Error al detener la grabación:', error));
  };

  const handleSave = () => {
    console.log('Guardar:', taskName, description, duration, audioBlob);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-gray-100 rounded-lg shadow-md p-4 w-1/2">
        <h2 className="text-lg font-bold mb-2">Create New Exercise</h2>
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-bold">Task</h3>
          <input
            type="text"
            value={taskName}
            onChange={e => setTaskName(e.target.value)}
            className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
          />
        </div>
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-bold">Description</h3>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F]"
          />
        </div>
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-bold">Duration</h3>
          <div className="flex justify-between">
            <button
              className={`bg-[#FEAB5F] hover:bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded ${duration === 30 ? 'bg-[#FEAB5F]' : ''}`}
              onClick={() => setDuration(30)}
            >
              00:30
            </button>
            <button
              className={`bg-[#FEAB5F] hover:bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded ${duration === 60 ? 'bg-[#FEAB5F]' : ''}`}
              onClick={() => setDuration(60)}
            >
              01:00
            </button>
            <button
              className={`bg-[#FEAB5F] hover:bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded ${duration === 90 ? 'bg-[#FEAB5F]' : ''}`}
              onClick={() => setDuration(90)}
            >
              01:30
            </button>
            <button
              className={`bg-[#FEAB5F] hover:bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded ${duration === 120 ? 'bg-[#FEAB5F]' : ''}`}
              onClick={() => setDuration(120)}
            >
              02:00
            </button>
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <button
            className={`bg-[#FEAB5F] hover:bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded ${isRecording ? 'hidden' : 'block'}`}
            onClick={handleStartRecording}
          >
            Play
        </button>
        <button
            className={`bg-[#FEAB5F] hover:bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded ${isRecording ? 'block' : 'hidden'}`}
            onClick={handleStopRecording}
        >
            Pause
        </button>
        </div>
        <div className="flex justify-between mb-4">
        <button
            className="bg-[#FEAB5F] hover:bg-[#FEAB5F] text-white font-bold py-2 px-4 rounded"
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

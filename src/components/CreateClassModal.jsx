import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateClassModal = ({ isOpen, onClose, onAddClass }) => {
  const [className, setClassName] = useState('');
  const [nivel, setNivel] = useState('');
  const [description, setDescription] = useState('');
  const [lengua, setLengua] = useState('');
  const [students, setStudents] = useState('');
  const [duration, setDuration] = useState('');
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const navigate = useNavigate();

  const handleAddClass = () => {
    const newClass = {
      id: Date.now(), // Generar un ID único
      name: className,
      description,
      lengua,
      students,
      duration,
      imagen: imagenSeleccionada,
    };
    onAddClass(newClass); // Llamar a la función para agregar la clase
    onClose();
  };

  const manejarSeleccionImagen = (event) => {
    const archivo = event.target.files[0];
    if (archivo && archivo.type.startsWith('image/')) {
      setImagenSeleccionada(URL.createObjectURL(archivo));
    }
  };

  const handleRedirectToClassroom = () => {
    navigate('/classroom');
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
      <div className="bg-gray-100 rounded-lg shadow-md p-4 w-1/2">
        <h2 className="text-lg mb-2">Create Class</h2>
        
        <div className="flex flex-col mb-4">
          <label className="text-lg mb-2">Image:</label>
          <div className="flex items-center">
            <input
              type="file"
              accept="image/*"
              onChange={manejarSeleccionImagen}
              className="hidden"
              id="file-input"
            />
            <button
              onClick={() => document.getElementById('file-input').click()}
              className="bg-[#FEAB5F] hover:bg-[#FE9B3F] text-white py-2 px-4 rounded"
            >
              Cargar imagen
            </button>
            {imagenSeleccionada && (
              <div className="ml-4 w-16 h-16">
                <img src={imagenSeleccionada} alt="Vista previa" className="max-w-full h-auto rounded-lg" />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-lg mb-2">Class Name:</label>
          <input
            type="text"
            value={className}
            onChange={e => setClassName(e.target.value)}
            className="p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F] w-full"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-lg mb-2">Nivel:</label>
          <input
            type="text"
            value={nivel}
            onChange={e => setNivel(e.target.value)}
            className="p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F] w-full"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-lg mb-2">Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="p-2 bg-gray-100 text-gray- 900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F] w-full"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-lg mb-2">Lengua:</label>
          <input
            type="text"
            value={lengua}
            onChange={e => setLengua(e.target.value)}
            className="p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F] w-full"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-lg mb-2">Estudiantes:</label>
          <input
            type="text"
            value={students}
            onChange={e => setStudents(e.target.value)}
            className="p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F] w-full"
          />
        </div>

        <div className="flex flex-col mb-4">
          <label className="text-lg mb-2">Duración:</label>
          <input
            type="text"
            value={duration}
            onChange={e => setDuration(e.target.value)}
            className="p-2 bg-gray-100 text-gray-900 border border-gray-300 rounded-md focus:ring-[#FEAB5F] focus:border-[#FEAB5F] w-full"
          />
        </div>

        <div className="flex justify-between mb-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-[#FEAB5F] hover:bg-[#FEAB5F] text-white py-2 px-4 rounded"
            onClick={handleAddClass}
          >
            Agregar
          </button>
          <button
            className="bg-[#FEAB5F] hover:bg-[#FEAB5F] text-white py-2 px-4 rounded"
            onClick={handleRedirectToClassroom}
          >
            Agregar tareas
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateClassModal;
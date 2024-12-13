import React, { useContext, useState } from 'react';
import { ActivityContext } from '../context/ActivityContext';
import CrearEjercicioModal from './CrearEjercicioModal';
import { useNavigate } from 'react-router-dom';

const ClassroomPage = () => {
  const { activities } = useContext(ActivityContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex items-start justify-center h-screen bg-gray-100 pt-20 pb-20">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg h-full overflow-y-auto">
        <button
          className="mb-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          Regresar a la página de inicio
        </button>
        <h1 className="text-3xl font-bold mb-4">Welcome to the Classroom!</h1>
        <h2 className="text-2xl font-semibold mb-2">Activities:</h2>
        {activities.length === 0 ? (
          <p>No hay actividades creadas.</p>
        ) : (
          <ul className="list-none flex flex-col gap-4">
            {activities.map((actividad, index) => (
              <li key={index} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-lg font-bold mb-2">{actividad.nombre}</h3>
                {actividad.imagen ? (
                  <img src={actividad.imagen} alt={actividad.nombre} className="w-full h-auto object-cover rounded-lg" />
                ) : (
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48" />
                )}
              </li>
            ))}
          </ul>
        )}
        <button
          className="mt-4 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleOpenModal} // Abre el modal para agregar actividad
        >
          Agregar Actividad
        </button>
      </div>
      <CrearEjercicioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ClassroomPage;
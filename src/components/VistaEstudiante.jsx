import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash } from 'lucide-react';
import FormularioRegistroEstudiante from './FormularioRegistroEstudiante';
import PerfilEstudiante from './PerfilEstudiante';

export default function VistaEstudiante() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [students, setStudents] = useState([]);
  const [transition, setTransition] = useState(false);

  const handleCreateStudent = (newStudent) => {
    setStudents([...students, newStudent]); // Agregar el nuevo estudiante a la lista
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleStudentProfileClick = () => {
    navigate('/perfil-estudiante');
  };

  const handleDeleteStudent = (index) => {
    const updatedStudents = students.filter((_, i) => i !== index);
    setStudents(updatedStudents);
  };

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-md p-8 border border-gray-200">
        <h1 className="text-3xl text-center mb-8 text-gray-900">Student</h1>
        
        <div className="flex flex-col items-center mb-4">
          <button
            className="w-full p-2 bg-[#FEAB5F] text-black rounded-md transition-colors duration-500 hover:bg-gray-700 hover:text-white"
            onClick={() => setShowModal(true)}
          >
            <p>+ Create New Student</p>
          </button>
        </div>
        
        {showModal && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
            <FormularioRegistroEstudiante onCreate={handleCreateStudent} />
          </div>
        )}
        
        <div className="flex flex-col items-center mb-4 w-full">
          <h2 className="text-lg text-gray-900 mb-2">Estudiantes registrados</h2>
          <ul className="list-none p-0 m-0 w-full">
            {students.map((student, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-sm transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-[#FEAB5F] mb-2 flex justify-between items-center">
                <div className="flex items-center">
                  {student.imagen && <img src={student.imagen} alt="Perfil" className="w-16 h-16 object-cover rounded-full mr-4" />}
                  <div>
                    <h3 className="text-lg text-gray-900">{student.nombre}</h3>
                    <p className="text-gray-600">{student.email}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-[#FEAB5F] text-black rounded py-1 px-3 transition-colors duration-300 hover:bg-gray-700 hover:text-white" onClick={handleStudentProfileClick}>
                    Student Profile
                  </button>
                  <button className="bg-red-500 hover:bg-red-700 text-white rounded py-1 px-3 transition-colors duration-300 hover:text-black" onClick={() => handleDeleteStudent(index)}>
                    <Trash size={18} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white rounded py-2 px-4 transition-colors duration-300 hover:text-black mt-4"
          onClick={() => navigate('/')}
        >
          Regresar a la página de inicio
        </button>
      </div>
    </div>
  );
}
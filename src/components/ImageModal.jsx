import React, { useState, useContext } from 'react';
import { ActivityContext } from '../context/ActivityContext'; // Importar el contexto

export default function ImageModal({ isOpen, onClose }) {
  const { agregarActividad } = useContext(ActivityContext); // Obtener la función para agregar actividad
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [tituloImagen, setTituloImagen] = useState('');

  const manejarSeleccionImagen = (event) => {
    const archivo = event.target.files[0];
    if (archivo && archivo.type.substr(0, 6) === "image/") {
      setImagenSeleccionada(URL.createObjectURL(archivo));
    }
  };

  const manejarGuardar = () => {
    if (imagenSeleccionada && tituloImagen) {
      agregarActividad({ nombre: tituloImagen, imagen: imagenSeleccionada }); // Agregar la actividad directamente
      onClose(); // Cerrar el modal
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-100 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Agregar Imagen</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <input
          type="text"
          placeholder="Título de la imagen"
          value={tituloImagen}
          onChange={(e) => setTituloImagen(e.target.value)}
          className="mb-4 w-full p-2 border border-gray-300 rounded"
        />
        <div className="mb-4">
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={manejarSeleccionImagen}
            className="hidden"
          />
          <button
            onClick={() => document.getElementById('file-input').click()}
            className="w-full py-2 bg-[#FEAB5F] text-gray-900 rounded-md hover:bg-[#FE9B3F] transition-colors"
          >
            Elegir archivo
          </button>
        </div>
        {imagenSeleccionada && (
          <div className="mt-4">
            <img src={imagenSeleccionada} alt="Vista previa" className="max-w-full h-auto rounded-lg" />
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <button
            onClick={manejarGuardar}
            className="px-4 py-2 bg-[#FEAB5F] text-gray-900 rounded-md hover:bg-[#FE9B3F] transition-colors mr-2"
          >
            Guardar
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-900 rounded-md hover:bg-gray-400 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
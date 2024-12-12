import React, { useState } from 'react'

export default function AudioModal({ isOpen, onClose }) {
  const [task, setTask] = useState('')
  const [audioName, setAudioName] = useState('')
  const [audioFile, setAudioFile] = useState(null)

  const handleAudioUpload = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file)
    }
  }

  const handleSave = () => {
    // Aquí iría la lógica para guardar el audio y la información
    console.log('Guardando:', { task, audioName, audioFile })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-100 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Add Audio</h2>
        
        <div className="mb-4">
          <label htmlFor="task" className="block text-sm font-medium text-gray-700 mb-1">Task</label>
          <input
            type="text"
            id="task"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task description"
          />
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Audio</h3>
          <div className="flex items-center justify-between">
            <button
              onClick={() => document.getElementById('audio-upload').click()}
              className="px-4 py-2 bg-[#FEAB5F] text-gray-900 rounded-md hover:bg-[#FE9B3F] transition-colors"
            >
              Add audio file
            </button>
            <input
              type="file"
              id="audio-upload"
              accept="audio/*"
              className="hidden"
              onChange={handleAudioUpload}
            />
            {audioFile && (
              <button
                onClick={() => setAudioFile(null)}
                className="text-red-600 hover:text-red-800"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {audioFile && <p className="mt-2 text-sm text-gray-600">{audioFile.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="audio-name" className="block text-sm font-medium text-gray-700 mb-1">Audio Name</label>
          <input
            type="text"
            id="audio-name"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={audioName}
            onChange={(e) => setAudioName(e.target.value)}
            placeholder="Enter audio name"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#FEAB5F] text-gray-900 rounded-md hover:bg-[#FE9B3F] transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}


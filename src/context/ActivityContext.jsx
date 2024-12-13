import React, { createContext, useState } from 'react';

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const agregarActividad = (actividad) => {
    setActivities((prevActivities) => [...prevActivities, actividad]);
  };

  return (
    <ActivityContext.Provider value={{ activities, agregarActividad }}>
      {children}
    </ActivityContext.Provider>
  );
};
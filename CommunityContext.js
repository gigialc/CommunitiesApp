import React, { createContext, useState } from 'react';

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [communityData, setCommunityData] = useState({});

  const updateCommunityData = (data) => {
    setCommunityData(data);
  };

  return (
    <CommunityContext.Provider value={{ communityData, updateCommunityData }}>
      {children}
    </CommunityContext.Provider>
  );
};
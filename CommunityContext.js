import React, { createContext, useState } from 'react';

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [communityData, setCommunityData] = useState({ name: '', description: '' });

  const updateCommunityData = (data) => {
    setCommunityData(data);
  };

  const contextValue = { communityData, updateCommunityData }; // Create the context value

  return (
    <CommunityContext.Provider value={contextValue}>
      {children}
    </CommunityContext.Provider>
  );
};
import React, { createContext, useState } from 'react';

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [communityData, setCommunityData] = useState(null);
  const [communities, setCommunities] = useState([]);
  const [currentPage, setCurrentPage] = useState('Home'); // Add currentPage state

  const updateCommunityData = (data) => {
    setCommunityData(data);
    setCommunities((prevCommunities) => [data, ...prevCommunities]);
  };

  const contextValue = {
    communityData,
    updateCommunityData,
    communities,
    currentPage, // Include currentPage in the context
    setCurrentPage, // Include setCurrentPage in the context
  };

  return (
    <CommunityContext.Provider value={contextValue}>{children}</CommunityContext.Provider>
  );
};


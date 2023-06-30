import React, { createContext, useState } from 'react';

export const CommunityContext = createContext();

export const CommunityProvider = ({ children }) => {
  const [communityData, setCommunityData] = useState(null);
  const [communities, setCommunities] = useState([]);

  const updateCommunityData = (data) => {
    setCommunityData(data);
    setCommunities((prevCommunities) => [data, ...prevCommunities]);
  };

  const contextValue = {
    communityData,
    updateCommunityData,
    communities,
  };

  return (
    <CommunityContext.Provider value={contextValue}>{children}</CommunityContext.Provider>
  );
};

import React, { createContext, useContext, useState } from 'react';

type AppContextType = {
  itemsNumberOnPage: number;
  pagesNumber: number;
  setPagesNumber: (newPagesNumber: number) => void;
};

const appContextDefaultValue = {
  itemsNumberOnPage: 6,
  pagesNumber: 0,
  setPagesNumber: () => {},
};
const AppContext = createContext<AppContextType>(appContextDefaultValue);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [pagesNumber, setPagesNumber] = useState<number>(appContextDefaultValue.pagesNumber);

  const itemsNumberOnPage = appContextDefaultValue.itemsNumberOnPage;

  return (
    <AppContext.Provider value={{ pagesNumber, setPagesNumber, itemsNumberOnPage }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

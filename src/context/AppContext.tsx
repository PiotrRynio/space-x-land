import React, { createContext, useContext, useState } from 'react';

type AppContextType = {
  itemsNumberOnPage: number;
  pagesNumber: number;
  setPagesNumber: (newPagesNumber: number) => void;
  searcherInputText: string;
  setSearcherInputText: (newSearcherInputText: string) => void;
  isFavoritesItemsWidgetOpen: boolean;
  setIsFavoritesItemsWidgetOpen: (newSearcherInputText: boolean) => void;
};

const appContextDefaultValue = {
  itemsNumberOnPage: 6,
  pagesNumber: 0,
  setPagesNumber: () => {},
  searcherInputText: '',
  setSearcherInputText: () => {},
  isFavoritesItemsWidgetOpen: false,
  setIsFavoritesItemsWidgetOpen: () => {},
};
const AppContext = createContext<AppContextType>(appContextDefaultValue);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [pagesNumber, setPagesNumber] = useState<number>(appContextDefaultValue.pagesNumber);
  const [searcherInputText, setSearcherInputText] = useState<string>(
    appContextDefaultValue.searcherInputText,
  );
  const [isFavoritesItemsWidgetOpen, setIsFavoritesItemsWidgetOpen] = useState<boolean>(
    appContextDefaultValue.isFavoritesItemsWidgetOpen,
  );

  const itemsNumberOnPage = appContextDefaultValue.itemsNumberOnPage;

  return (
    <AppContext.Provider
      value={{
        pagesNumber,
        setPagesNumber,
        itemsNumberOnPage,
        searcherInputText,
        setSearcherInputText,
        isFavoritesItemsWidgetOpen,
        setIsFavoritesItemsWidgetOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

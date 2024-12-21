import React, {createContext, useState} from 'react';
import {AppContextType, AppProviderProps} from '../types/types';

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const [selectedHotel, setSelectHotel] = useState<number | undefined>(
    undefined,
  );

  return (
    <AppContext.Provider value={{selectedHotel, setSelectHotel}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

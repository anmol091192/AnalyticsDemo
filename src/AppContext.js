import React , { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ date, setDate ] = useState(null);

    const value = {
        date,
        setDate,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider> 
};
import React , { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [ toDate, setToDate ] = useState(new Date());
    const [ fromDate, setFromDate ] = useState(new Date());

    const value = {
        toDate,
        fromDate,
        setToDate,
        setFromDate
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider> 
};
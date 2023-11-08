import React, {createContext, useContext, useEffect, useMemo, useState} from "react";
import {useLocation} from "react-router-dom";

export const HistoryContext = createContext(null);

export function HistoryProvider({ children }) {
    const location = useLocation();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory((prevHistory) => {
            const newPath = location.pathname;

            if (newPath !== prevHistory[prevHistory.length - 1]) {
                return [...prevHistory, newPath];
            }

            return prevHistory;
        });

    }, [location]);

    return (
        <HistoryContext.Provider value={{history, setHistory}}>
            {children}
        </HistoryContext.Provider>
    );
}

export function useMyContext() {
    return useContext(HistoryContext);
}
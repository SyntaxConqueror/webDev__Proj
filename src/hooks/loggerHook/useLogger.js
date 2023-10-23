import {useEffect, useState} from "react";


export const useLogger = (initialValue) => {

    function setLoggerValue(initialValue){
        console.log(initialValue);
    }

    useEffect(() => {
        if(initialValue){
            setLoggerValue(initialValue);
        }
    }, [initialValue]);

    return {
        setLoggerValue
    }
}


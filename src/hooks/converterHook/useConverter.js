import  {useEffect, useState} from 'react';


export const useConverter = (initialValue) => {
    const [usdPrice, setUsdPrice] = useState(initialValue);

    function setConvertValue(value) {
        setUsdPrice(Math.ceil(value / 37.5));
    }

    useEffect(() => {
        if (initialValue) {
            setConvertValue(initialValue);
        }
    }, [initialValue]);

    return {
        usdPrice, setConvertValue
    };
};
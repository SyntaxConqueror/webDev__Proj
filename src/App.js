import './App.css';
import {MainContainer} from "./components/MainContainer/MainContainer";
import {Route, Routes} from 'react-router-dom';
import ProductPage from "./components/ProductPage/ProductPage";
import {createContext, useEffect} from "react";
import React from 'react';
import {HistoryProvider} from "./providers/HistoryProvider/HistoryProvider";
import {Provider, useDispatch} from "react-redux";
import {setProducts} from "./redux/actions";

const products = [
    {"iPhone 15 Pro Max": 34400},
    {"Samsung Galaxy S21": 21000},
    {"MacBook Pro": 124000},
    {"Sony PlayStation 5": 43000},
    {"Nintendo Switch": 43434},
    {"Bose QuietComfort 35 II Headphones": 20000},
    {"Dyson V11 Cordless Vacuum Cleaner": 33000},
    {"Instant Pot Duo": 20000},
    {"Nespresso Vertuo Coffee Maker": 12000},
    {"Fitbit Charge 5": 10000},
];

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProducts(products));
    }, [dispatch]);

    return (
        <div>
            <HistoryProvider>
                <Routes>
                    <Route path="/" element={<MainContainer />} />
                    <Route
                        path={`/productPage/:index`}
                        element={<ProductPage />}
                    />
                </Routes>
            </HistoryProvider>
        </div>
    );
}

export default App;

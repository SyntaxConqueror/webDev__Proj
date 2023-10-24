import './App.css';
import {Header} from "./components/Header/Header";
import {MainContainer} from "./components/MainContainer/MainContainer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductPage from "./components/ProductPage/ProductPage";
function App() {
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

    return (
        <div>

            <Router>
                <Routes>
                    <Route path="/" element={<MainContainer productsList={products}/>}></Route>
                    {products.map((product, index) =>
                        <Route
                            key={index}
                            path={`/productPage/${index}`}
                            element={<ProductPage product={product} />}
                        />
                    )}
                </Routes>

            </Router>
        </div>
    );
}

export default App;

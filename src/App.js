import './App.css';
import {Header} from "./components/Header/Header";
import {MainContainer} from "./components/MainContainer/MainContainer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductPage from "./components/ProductPage/ProductPage";
function App() {
    const products = [
        "iPhone 13",
        "Samsung Galaxy S21",
        "MacBook Pro",
        "Sony PlayStation 5",
        "Nintendo Switch",
        "Bose QuietComfort 35 II Headphones",
        "Dyson V11 Cordless Vacuum Cleaner",
        "Instant Pot Duo",
        "Nespresso Vertuo Coffee Maker",
        "Fitbit Charge 5",
    ];

    return (
        <div>

            <Router>
                <Routes>

                    <Route path="/" element={<MainContainer productsList={products}/>}></Route>
                    <Route path="/productPage" element={<ProductPage/>}></Route>
                </Routes>

            </Router>
        </div>
    );
}

export default App;

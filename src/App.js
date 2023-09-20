import './App.css';
import {Header} from "./components/Header/Header";
import {MainContainer} from "./components/MainContainer/MainContainer";
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
            <Header/>
            <MainContainer productsList={products}/>
        </div>
    );
}

export default App;

import Header from './components/Header';
import Home from "./components/Home.jsx";
import Products from "./components/Products.jsx";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {

    return (
        <>
            <Header />
            <main>
                <Home />
                <Products />
                <About />
            </main>
            <Footer />
        </>
    )
}
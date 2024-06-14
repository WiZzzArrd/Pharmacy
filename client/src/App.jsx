import {Route, Routes, BrowserRouter} from "react-router-dom";
import "./App.css";
import {Container} from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./UI/back-to-top/BackToTopButton";
import AppRouter from "./components/AppRouter.jsx";

function App() {
    return (
        <BrowserRouter>
            <Container maxWidth='lg'>
                <Header/>
                <BackToTopButton/>
                <AppRouter/>
                <Footer/>
            </Container>
        </BrowserRouter>
    );
}

export default App;

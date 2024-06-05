import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Container } from "@mui/material";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contacts from "./pages/Contacts/Contacts";
import Notfound from "./pages/Notfound/Notfound";
import BackToTopButton from "./UI/back-to-top/BackToTopButton";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Container maxWidth='lg'>
      <Header />
      <BackToTopButton></BackToTopButton>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/contacts' Component={Contacts}></Route>
        <Route path='/cart' Component={Cart}></Route>
        <Route path='*' Component={Notfound}></Route>
      </Routes>
      <Footer></Footer>
    </Container>
  );
}

export default App;

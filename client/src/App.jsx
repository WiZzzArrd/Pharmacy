import {BrowserRouter} from "react-router-dom";
import "./App.css";
import {Container} from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BackToTopButton from "./UI/back-to-top/BackToTopButton";
import AppRouter from "./components/AppRouter.jsx";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "./main.jsx";
import {check} from "./http/userApi.js";
import CircularIndeterminate from "./UI/loader/loader";
import React from "react";



const  App = observer( ()=> {

    const [loading, setIsLoading] = React.useState(true    )
    const {user} = useContext(Context)

    useEffect(()=>{
        check().then((data)=>{
            user.setIsAuth(true)
        }).finally(()=>{
            setIsLoading(false)
        }).catch((e)=>{
            console.log(e.response.data.message)
        })
    }, [])

    if(loading){
        return <div className="loader">
            <CircularIndeterminate></CircularIndeterminate>
        </div>
    }

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
})

export default App;

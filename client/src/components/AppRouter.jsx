import React, {useContext} from 'react';
import {Route, Routes, redirect} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes.js";
import {Context} from "../main.jsx";


const AppRouter = () => {

    const {user} = useContext(Context)

    console.log(user)

    return (
        <Routes>
            { user.isAuth && authRoutes.map(({path, Component}) =>
                < Route path = {path} Component={Component} key={path}/>
            )}

            { publicRoutes.map(({path, Component}) =>
                < Route path = {path} Component={Component} key={path}/>
            )}

        </Routes>


    );
};

export default AppRouter;
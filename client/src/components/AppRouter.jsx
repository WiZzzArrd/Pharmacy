import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes.js";
import {Context} from "../main.jsx";
import {observer} from "mobx-react-lite";


const AppRouter = observer( () => {

    const {user} = useContext(Context)


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
});

export default AppRouter;
import React, {useContext} from 'react';
import closedEye from "../../assets/icons/closed-eye.png"
import openedEye from "../../assets/icons/eye.png"
import style from "./auth.module.css"
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import Button from "@mui/material/Button";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../../utils/consts.js";
import {login, registration} from "../../http/userApi.js";
import {observer} from "mobx-react-lite";
import {Context} from "../../main.jsx";

const Auth = observer( () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const click = async ()=>{

        try {
            let data
            if(isLogin){
                data =  await login(email, password)
            }else{
                data =  await registration(email, password)
            }

            user.setUser(data)
            localStorage.setItem("userId", data.id)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        }catch (e){
            alert(e.response.data.message)
        }

    }


    return (
        <form className={style.form}>
            <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <div>
                <FormControl sx={{m: 1, width: '35ch'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
                    <OutlinedInput
                        value={email}
                        onChange = {(e)=> setEmail(e.target.value)}
                        id="outlined-adornment-password"
                        type={"email"}
                        required={true}
                        label="Email"
                    />
                </FormControl>
            </div>

            <div>
                <FormControl sx={{m: 1, width: '35ch'}} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        value={password}
                        onChange = {(e)=> setPassword(e.target.value)}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <img src={openedEye} width={20} height={20} alt=""/> :
                                        <img width={20} height={20} src={closedEye} alt=""/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </div>
            <div className={style.row}>

                {isLogin ? <>
                        <Button size={"medium"} onClick={click} variant={"contained"} style={{
                            background: "#d68048",
                            width: "50%",
                            marginTop: "15px",
                            marginBottom: "25px"
                        }}>Войти</Button>
                        <div style={{marginBottom: "20px"}}>
                            Нет аккаунта? <Link to={REGISTRATION_ROUTE}>Зарегистрироваться</Link>
                        </div>
                    </> :
                    <>
                        <Button size={"medium"} variant={"contained"}   onClick = {click} style={{
                            background: "#d68048",
                            width: "50%",
                            marginTop: "15px",
                            marginBottom: "25px"

                        }}>Регистрация</Button>
                        <div style={{marginBottom: "20px"}}>
                            Есть аккаунт? <Link to={LOGIN_ROUTE}>Войти</Link>
                        </div>
                    </>
                }
            </div>

        </form>
    );
});

export default Auth;
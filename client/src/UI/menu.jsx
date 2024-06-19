import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import userIcon from "../assets/header/person.svg";
import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../main.jsx";
import {LOGIN_ROUTE} from "../utils/consts.js";
import {observer} from "mobx-react-lite";
import {set} from "mobx";

const  BasicMenu =  observer(()=> {
    const {user} = useContext(Context)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const navigate = useNavigate()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    let handleClose

    if(user.isAuth){
        handleClose = ()=>{
            if(window.confirm("Вы уверены, что хотите выйти из аккаунта?")){
                setAnchorEl(null);
                user.setUser({})
                localStorage.removeItem("userId")
                user.setIsAuth(false)
                localStorage.removeItem('token')
                navigate(LOGIN_ROUTE)
            }else{
                setAnchorEl(null)
            }

        }
    }else{
        handleClose = ()=>{
            setAnchorEl(null);
            navigate(LOGIN_ROUTE)
        }
    }

    return (
        <div >
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src={userIcon} alt='user' />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    user.isAuth &&   <MenuItem onClick={handleClose}>Выйти</MenuItem>
                }


                {!user.isAuth && <><Link  style={{textDecoration: "none", color: "black"}} to={"/registration"}> <MenuItem onClick={handleClose}>Регистрация</MenuItem></Link>
                <Link to={"/login"} style={{textDecoration: "none", color: "black"}}><MenuItem onClick={handleClose}>Авторизация</MenuItem></Link>
                </>
                }

            </Menu>
        </div>
    );
})

export default  BasicMenu
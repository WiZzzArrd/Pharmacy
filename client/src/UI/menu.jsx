import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import user from "../assets/header/person.svg";
import {Link} from "react-router-dom";

export default function BasicMenu({auth}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div >
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img src={user} alt='user' />
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
                    auth &&   <MenuItem onClick={handleClose}>Выйти</MenuItem>
                }


                {!auth && <><Link  style={{textDecoration: "none", color: "black"}} to={"/registration"}> <MenuItem onClick={handleClose}>Регистрация</MenuItem></Link>
                <Link to={"/login"} style={{textDecoration: "none", color: "black"}}><MenuItem onClick={handleClose}>Авторизация</MenuItem></Link>
                </>
                }

            </Menu>
        </div>
    );
}
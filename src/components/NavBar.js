import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri' // Logo Página Web
import { AiOutlineBars } from 'react-icons/ai'; // Logo Menú (Hamburguesa)
import { VscClose } from 'react-icons/vsc'; // Logo Menú (X)
import { Button } from './Button';


function NavBar() {

    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);


    const handleClick = () => {
        
        setClick(!click)
    
    };

    const closeMobileMenu = () => {

        setClick(false)

    }

    const showButton = () => {

        if(window.innerWidth <= 960) {

            setButton(false)

        } else {

            setButton(true)

        }

    }

    window.addEventListener('resize', showButton);


        return(
            
            <div className = "navbar">
                <div className = "navbar-container container">

                    <Link to = '/' className = "navbar-logo"><RiBankLine className = "navbar-icon" />Secure Bank</Link>

                    <div className = "menu-icon" onClick = {handleClick}>
                        {click ? <AiOutlineBars /> : <VscClose />}
                    </div>

                    <ul className = {click ? 'nav-menu active' : 'nav-menu'} >

                        <li className = "nav-item">
                            <Link to = '/' className = "nav-links">Inicio</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to = '/servicios' className = "nav-links">Servicios</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to = '/productos' className = "nav-links">Productos</Link>
                        </li>

                        <li className = "nav-btn">
                            {button ? (

                                <Link to = '/sign-up' className = "btn-link">
                                    <Button buttonStyle = 'btn--outline'>Registrarse</Button>
                                </Link>

                            ) : (

                                <Link to = '/sign-up' className = "btn-link">
                                    <Button buttonStyle = 'btn--outline' buttonSize = "btn--mobile">Registrarse</Button>
                                </Link>

                            )}
                        </li>

                    </ul>

                </div>
            </div>

        );

}

export default NavBar;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RiBankLine } from 'react-icons/ri' // Logo Página Web
import { AiOutlineBars } from 'react-icons/ai'; // Logo Menú (Hamburguesa)
import { VscClose } from 'react-icons/vsc'; // Logo Menú (X)
import { Button } from './Button';
import './NavBar.css';
import { IconContext } from 'react-icons/lib'


function NavBar() {

    const [click, setClick] = useState(false);

    const [button, setButton] = useState(true);


    const handleClick = () => {
        
        setClick(!click);
    
    };

    const closeMobileMenu = () => {

        setClick(false);

    }

    const showButton = () => {

        if(window.innerWidth <= 960) {

            setButton(false);

        } else {

            setButton(true);

        }

    }

    useEffect(() => {

        showButton();

    }, []);

    window.addEventListener('resize', showButton);


        return(
            
        <IconContext.Provider value = {{ color: '#fff' }}>

            <div className = "navbar">
                <div className = "navbar-container container">

                    <Link to = '/' className = "navbar-logo" onClick = {closeMobileMenu}><RiBankLine className = "navbar-icon" />Secure Bank</Link>

                    <div className = "menu-icon" onClick = {handleClick}>
                        {click ? <VscClose /> : <AiOutlineBars />}
                    </div>

                    <ul className = {click ? 'nav-menu active' : 'nav-menu'} >

                        <li className = "nav-item">
                            <Link to = '/' className = "nav-links" onClick = {closeMobileMenu}>Home</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to = '/services' className = "nav-links" onClick = {closeMobileMenu}>Services</Link>
                        </li>

                        <li className = "nav-item">
                            <Link to = '/products' className = "nav-links" onClick = {closeMobileMenu}>Products</Link>
                        </li>

                        <li className = "nav-btn">
                            {button ? (

                                <Link to = '/sign-up' className = "btn-link">
                                    <Button buttonStyle = 'btn--outline'>Sign Up</Button>
                                </Link>

                            ) : (

                                <Link to = '/sign-up' className = "btn-link">
                                    <Button buttonStyle = 'btn--outline' buttonSize = "btn--mobile"  onClick = {closeMobileMenu}>Sign Up</Button>
                                </Link>

                            )}
                        </li>

                    </ul>

                </div>
            </div>
            
            

        </IconContext.Provider>

        );

}

export default NavBar;
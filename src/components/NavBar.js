import React, {Component} from 'react';

class NavBar extends Component {

    render() {


        return(
            
            <div className = "navbar">
                <div className = "navbar-container container">

                    <Link to = '/' className = "navbar-logo">Secure Bank</Link>
                    <div className = "menu-icon"></div>

                </div>
            </div>

        );

    }

}

export default NavBar;
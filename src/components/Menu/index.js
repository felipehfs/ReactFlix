import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './menu.css';
import ButtonLink from '../../components/Button';

function Menu(props) {
    return (
        <nav className="Menu">
            <a href="/">
                <img
                    className="Logo" 
                    src={Logo} 
                    alt="Aluraflix logo"/>
            </a>
            <ButtonLink as="a" className="ButtonLink" href="/">Novo vídeo</ButtonLink>
        </nav>
    )
}

export default Menu;
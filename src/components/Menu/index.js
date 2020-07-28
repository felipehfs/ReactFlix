import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './menu.css';
import {
    Link
} from 'react-router-dom';
import ButtonLink from '../../components/Button';

function Menu(props) {
    return (
        <nav className="Menu">
            <Link to="/" >
                <img
                    className="Logo" 
                    src={Logo} 
                    alt="Aluraflix logo"/>
            </Link>
            <ButtonLink as={Link} className="ButtonLink" to="/cadastro/video">Novo vídeo</ButtonLink>
        </nav>
    )
}

export default Menu;
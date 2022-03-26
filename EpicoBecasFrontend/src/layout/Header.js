import React from 'react';
import '../styles/header.css';
import Container from '@mui/material/Container';
import LogoEpicoColor from '../content/images/Logo-Epico-Color.png';

export default function Header() {
    return (
        <>
            <header id="page-header" className="home desktop desktop-menu page-header header-01 header-layout-fixed">
                <div id="page-header-inner" className="page-header-inner" data-sticky="1">
                    <div className="container">
                        <Container fixed>
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="header-wrap">
                                        <div className="branding">
                                            <div className="branding__logo">
                                                <a href="/" rel="home">
                                                    <div>
                                                        <img src={LogoEpicoColor} alt="Épico" className="sticky-logo" />
                                                        <div className='becas-logo'>PROGRAMA DE BECAS</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <div id="page-navigation" className="navigation page-navigation">
                                            <nav id="menu" className="menu menu--primary">
                                                <ul id="menu-epico-menu" className="menu__container sm sm-simple" data-smartmenus-id="16477980564222227">

                                                    <li id="menu-item-8509" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8509">
                                                        <a href="/"><span className="menu-item-title">Inicio</span></a>
                                                    </li>
                                                    <li id="menu-item-163" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-163">
                                                        <a href="/"><span className="menu-item-title">Nosotros</span></a>
                                                    </li>
                                                    <li id="menu-item-8333" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-8333">
                                                        <a href="/"><span className="menu-item-title">Contacto</span></a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <div className="header-right">
                                            <div id="page-open-mobile-menu" onClick={() => window.open(document.getElementById('page-mobile-main-menu'))} className="page-open-mobile-menu">
                                                <div className="inner">
                                                    <div className="icon"><i ></i></div>
                                                </div>
                                            </div>

                                            <div className="header-button">
                                                <a className="tm-button tm-button-sm header-sticky-button style-flat tm-button-secondary" href="">
                                                    Inicia sesión
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </header>
        </>
    )
}

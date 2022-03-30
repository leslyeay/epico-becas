import * as React from "react";
import Container from "@mui/material/Container";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import '../../styles/landing.css'
import FS from '../../content/images/FS.jpg';

export default function ScholarshipDetail() {
    return (
        <>
            <Header />
            <div style={{ height: '90px' }}></div>
            <div className="contenedor">
                <img style={{ width: "100%", height: 'auto' }} id="banner-epico-landing" src={FS} />
                <div className="centrado">PROGRAMA FULLSTACK</div>
            </div>
            <svg className='hide' xmlns="http://www.w3.org/2000/svg">
                <filter id='svg-blur'>
                    <feGaussianBlur stdDeviation='60' />
                </filter>
            </svg>
            <Container>
                
            </Container>
            <Footer />
        </>
    );
}

import * as React from "react";
import Container from "@mui/material/Container";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import b from '../../content/images/2.png';
import video from '../../content/videos/epico.mp4';
import '../../styles/landing.css';
import { Box, Grid, Typography } from "@mui/material";
import SccholarshipCarousel from "./ScholarshipCarousel";

export default function Home() {
    return (
        <>
            <Header />
            <img style={{ width: "100%", marginTop: '87px' }} id="banner-epico-landing" src={b} />
            <div id="landing-video" style={{ backgroundColor: '#f0f1f2' }}>
                <Container fixed sx={{ backgroundColor: '#f0f1f2' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="center" rowSpacing={{xs:6, sm:6}} columnSpacing={{ xs: 6, sm: 6, md: 9, lg: 12 }}>
                            <Grid item xs={10} sm={12} md={7} lg={6}>
                                <div className="tm-popup-video style-poster-01 tm-animation move-up animate" id="tm-popup-video-62397687aa143">
                                    <video controls >
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </Grid>
                            <Grid item xs={10} sm={12} md={5} lg={6}>
                                <div className="wpb_text_column wpb_content_element ">
                                    <div className="wpb_wrapper">
                                        <p className="text-video">
                                            Articulamos con el sector público, privado, academia, ONG&apos;s y ciudadanía para promover el desarrollo económico y la competitividad de nuestra ciudad,&nbsp;<strong>generando nuevas oportunidades para los guayaquileños</strong>&nbsp;a través de la tecnología, innovación y la economía circular.
                                        </p>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
            <Container fixed>
                <Typography variant="h1" mt={7} color="primary" align="center">
                    ¡Conoce nuestros programas de becas!
                    <SccholarshipCarousel />
                </Typography>
            </Container>
            <Footer />
        </>
    );
}

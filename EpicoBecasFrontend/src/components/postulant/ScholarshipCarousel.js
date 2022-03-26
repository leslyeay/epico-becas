import React, { Component } from "react";
import Slider from "react-slick";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FS from '../../content/images/FS.jpg';
import FE from '../../content/images/FE.webp';
import DS from '../../content/images/DS.jpg';
import AI from '../../content/images/AI.jpg';
import '../../styles/carousel.css';
import { Container } from "@mui/material";
import { useNavigate } from 'react-router-dom' 

export default class ScholarshipCarousel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 200,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
            // autoplay: true,
            // autoplaySpeed: 2000,
        };
        return (
            <Container id="carrusel-becas-epico" className="tm-animation move-up animate">
                <div style={{ height: '30px' }}></div>
                <Slider {...settings}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            className="sixteen-nine-img"
                            image={FS}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                FullStack
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="secondary" onClick={() => useNavigate("/contacto")}>Ver más</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            className="sixteen-nine-img"
                            image={FE}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Frontend
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button>Ver más</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            className="sixteen-nine-img"
                            component="img"
                            image={DS}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Ciencia de datos
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="secondary">Leer más</Button>
                        </CardActions>
                    </Card>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            className="sixteen-nine-img"
                            image={AI}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Inteligencia Artificial
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="outlined" color="secondary" >Ver más</Button>
                        </CardActions>
                    </Card>
                </Slider>
                <div style={{ height: '90px' }}></div>
            </Container>
        );
    }
}
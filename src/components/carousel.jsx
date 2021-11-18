import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Carousel1 from '../assets/images/carousel-1.jpeg';
import Carousel2 from '../assets/images/carousel-2.jpeg';
import Carousel3 from '../assets/images/carousel-3.jpeg';
import '../assets/styles/carousel.css';

const MyCarousel = () => {

    return (
        <div className="carousel-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ Carousel1 }
                        alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ Carousel2 }
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ Carousel3 }
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default MyCarousel;
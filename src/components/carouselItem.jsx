import React from 'react';

const CarouselItem = () => {

    const [images, setImage] = useState([
        '/images/carousel-1.jpeg',
        '/images/carousel-2.jpeg',
        '/images/carousel-3.jpeg'
    ])

    return (
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
    )
}

export default CarouselItem;
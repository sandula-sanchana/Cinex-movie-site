import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/anime-girl-demon-horn-2k-wallpaper-uhdpaper.com-131@5@h.jpg';
import slide2 from '../../assets/anime-girl-red-eyes-2k-wallpaper-uhdpaper.com-364@5@j.jpg';
import slide3 from '../../assets/black-and-white-2560x1440-21293.jpg';
import './Carousels.css';

export const Carousels = () => {
    return (
        <Carousel className="carousel">
            <Carousel.Item interval={800}>
                <img className="d-block w-100" src={slide1} alt="First slide" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img className="d-block w-100" src={slide2} alt="Second slide" />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={slide3} alt="Third slide" />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

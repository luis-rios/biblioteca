import Carousel from 'react-bootstrap/Carousel';
import '../styles/Item.css'
import Img1 from '../images/elprincipito.jpg'
import Img2 from '../images/king.jpg'
import Img3 from '../images/potter.jpg'
export default function Carrusel(){   
    return(
        
            <Carousel>
            <Carousel.Item>
                <img
                    className="image"
                    src={Img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="image"
                    src={Img2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="image"
                    src={Img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        
    )
}
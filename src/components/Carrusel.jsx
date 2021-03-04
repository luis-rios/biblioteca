import Carousel from 'react-bootstrap/Carousel';
import '../styles/Item.css'
import Img1 from '../images/elprincipito.jpg'
import Img2 from '../images/king.jpg'
import Img3 from '../images/potter.jpg'
import '../styles/Carousel.css';
export default function Carrusel(){   
    return(
        <div className="carousel">

<Carousel className="container">
            <Carousel.Item >
                <img
                    className="image1"
                    src={Img1}
                    alt="Primera slide"              
                />
                <Carousel.Caption >
                    <h3>Detalles</h3>
                    <p><span>El principito</span> es una narración corta del escritor francés Antoine de Saint-Exupéry, que trata de la historia de un pequeño príncipe que parte de su asteroide a una travesía por el universo, en la cual descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="image2"
                    src={Img2}
                    alt="Segundo slide"
                />
                <Carousel.Caption>
                    <h3><span>Detalles</span></h3>
                    <p><span>Jack Torrance</span> se convierte en cuidador de invierno en el Hotel Overlook, en Colorado, con la esperanza de vencer su bloqueo con la escritura. Se instala allí junto con su esposa, Wendy, y su hijo, Danny, que está plagado de premoniciones psíquicas. Mientras la escritura de Jack no fluye y las visiones de Danny se vuelven más preocupantes, Jack descubre oscuros secretos del hotel y comienza a convertirse en un maníaco homicida, empeñado en aterrorizar a su familia.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                    className="image3"
                    src={Img3}
                    alt="Tercero slide"
                />

                <Carousel.Caption>
                <h3><span>Detalles</span></h3>
                <p><span>Hogwarts</span>  se prepara para el Torneo de los Tres Magos, en el que competirán tres escuelas de hechicería. Para sorpresa de todos, Harry Potter es elegido para participar en la competencia, en la que deberá luchar contra dragones, internarse en el agua y enfrentarse a sus mayores miedos.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        
    )


        </div>
    )
}
            
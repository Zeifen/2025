import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { images } from "../../data/data.jsx";
import "../../index.css";

const UtilsCarousel = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utils">Utilidades</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Carrusel
          </li>
        </ol>
      </nav>
      <hr />
      <h1>Carrusel</h1>
      <hr />
      <div className="container">
        <Carousel>
            {images.map((image) => (
            <Carousel.Item key={image.id}>
                <img
                className="d-block w-100 h-100" src={image.nombre} alt={image.titulo}/>
                <Carousel.Caption>
                <p className='background-carousel'>{image.caption}</p>
                </Carousel.Caption>
            </Carousel.Item>
            ))}
        </Carousel>
        </div>
    </>
  );
};

export default UtilsCarousel;

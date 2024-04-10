import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './tratamentos.css'; // Importe seu arquivo de estilos CSS

export default function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Mostra apenas um slide por vez
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="https://www.des1gnon.com/wp-content/uploads/2020/03/Pexels-Banco-de-Imagens-gratis-Des1gnON.jpg" alt="" className="carousel-image" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Ggv8EB3gMfABP5j8b_xL-L-RZpHso5AUoO-j_xfB8A&s" alt="" className="carousel-image" />
      </div>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE6IcEkiYmWnnM6BOfAoaSka3Ni9xsv-stjHwO5L_c1QGLACxohLbmKYrmbQKvc3peATY&usqp=CAU" alt="" className="carousel-image" />
      </div>
      {/* Repeat the above divs for additional items */}
    </Slider>
  );
}

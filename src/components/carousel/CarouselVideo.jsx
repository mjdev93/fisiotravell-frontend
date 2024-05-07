import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carouselVideo.css"


export const CarouselVideo = () => {
  const settings = {
    dots: false, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 4000, 
    cssEase: "linear" ,
    pauseOnHover: true
  };

  return (
    <div style={{ margin: '0px' }}>
      <Slider {...settings}>
        <div>
  
          <iframe
            width="90%"
            height="180"
            src="https://www.youtube.com/embed/eW6oZ62qrlQ?si=Ere3OgeEoousgPwc"
            frameBorder="0"
            allowFullScreen
            title="Ejercicio de la estrella"
          ></iframe>
          <h3 className="subTitleVideoCarousel">EJERCICIO DE TOBILLO</h3>
          <h2 className="titleVideoCarousel">Ejercicio de la estrella</h2>
        </div>
        <div>
          <iframe
            width="90%"
            height="180"
            src="https://www.youtube.com/embed/eT22KWjXTWo?si=vjC4oBii31Z-XEcx"
            frameBorder="0"
            allowFullScreen
            title="Estiramiento de isquios"
          ></iframe>
          <h3 className="subTitleVideoCarousel">ESTIRAMIENTO DE PIERNA</h3>
          <h2 className="titleVideoCarousel">Estiramiento de isquios</h2>
        </div>
        <div>
          <iframe
            width="90%"
            height="180"
            src="https://www.youtube.com/embed/89ukX_1Oth8?si=7XTZUA_R333MietA"
            frameBorder="0"
            allowFullScreen
            title="Estiramiento de gemelo"
          ></iframe>
          <h3 className="subTitleVideoCarousel">ESTIRAMIENTO DE PIERNA</h3>
          <h2 className="titleVideoCarousel">Estiramiento de gemelo</h2>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselVideo;

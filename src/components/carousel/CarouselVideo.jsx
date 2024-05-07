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
    cssEase: "linear",
    pauseOnHover: true,
  };

  return (
    <div style={{ margin: '0px' }}>
      <Slider {...settings}>
        <div>
          <iframe width="90%" height="180" src="https://www.youtube.com/embed/eW6oZ62qrlQ?si=9ITvvc6MXmJzJkWW" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <h3 className="subTitleVideoCarousel">EJERCICIO DE TOBILLO</h3>
          <h2 className="titleVideoCarousel">Ejercicio de la estrella</h2>
        </div>
        <div>
        <iframe width="90%" height="180" src="https://www.youtube.com/embed/eT22KWjXTWo?si=XLZJXj_HAi9gYwCP" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <h3 className="subTitleVideoCarousel">ESTIRAMIENTO DE PIERNA</h3>
          <h2 className="titleVideoCarousel">Estiramiento de isquios</h2>
        </div>
        <div>
        <iframe width="90%" height="180" src="https://www.youtube.com/embed/89ukX_1Oth8?si=qE42quKCxp1ZlCyj" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <h3 className="subTitleVideoCarousel">ESTIRAMIENTO DE PIERNA</h3>
          <h2 className="titleVideoCarousel">Estiramiento de gemelo</h2>
        </div>
      </Slider>
    </div>
  );
};

export default CarouselVideo;

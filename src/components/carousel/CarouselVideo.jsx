import React from "react";
import ReactPlayer from "react-player";
import { Carousel } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css";
import "./carouselVideo.css";

const CarouselVideo = () => {

  const videoProps = [
    {
      id: 1,
      url:"https://www.youtube.com/watch?v=41VyPWPZ87I"
    },
    {
      id: 2,
      url:"https://www.youtube.com/watch?v=bFWrgXEJ3rQ",
    },
    {
      id: 3,
      url: "https://youtu.be/IfdW52X1BSc",
    },
  ]


  return (    <div className="carouselContainer">
  <Carousel className="carousel">
    {videoProps.map((videoObj) => {
      return (
        <Carousel.Item key={videoObj.id}>
          <ReactPlayer
            url={videoObj.url}
            controls={true}
            playing={false}
            fade={true}
          />
        </Carousel.Item>
      );
    })}
  </Carousel>
</div>)

};

export default CarouselVideo;
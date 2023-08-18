import React from "react";
import AnimatedLetters from "../Animations/AnimatedLetters";
import Slider from "react-slick";

const AddProject = ({ heading, type, stack, url, images }) => {
  const projImgSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    vertical: true,
    fade: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slide: "",
  };

  return (
    <div className="project">
      <div className="page-text-container project-details">
        <div className="project-heading">
          <h1>
            <AnimatedLetters word={heading} start_delay={8} />
            <br />
          </h1>
        </div>
        <div className="project-subdetails mt-30">
          <h5>Project Type: {type}</h5>
          <h5>Tech Stack: {stack}</h5>
        </div>
        <a href={url}>
          <button className="flat-btn mt-20">VIEW HERE</button>
        </a>
      </div>

      <div className="project-images">
        <Slider {...projImgSettings}>
          {images.map((img, idx) => {
            return (
              <div key={idx} className="project-img">
                <img src={process.env.PUBLIC_URL + img} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default AddProject;

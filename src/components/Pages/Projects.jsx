import React, { useEffect, useRef } from "react";
import AddProject from "../Projects/AddProject";
import projectsData from "../../data/projects.json";
import Slider from "react-slick";

const Projects = () => {
  const projSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    vertical: true,
    speed: 1000,
  };

  const slider = useRef(null);
  let enableSliderScroll = true;

  function scroll(e) {
    if (enableSliderScroll === true) {
      enableSliderScroll = false;
      if (slider === null) return 0;

      e.wheelDelta > 0
        ? slider.current.slickNext()
        : slider.current.slickPrev();

      setTimeout(() => {
        enableSliderScroll = true;
      }, 2000)
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", scroll, true);

    return () => {
      window.removeEventListener("wheel", scroll, true);
    };
  }, []);

  return (
    <>
      <div className="project-page">
        {projectsData.map((projectTypeObj) => {
          let projectType = projectTypeObj.type;
          return (
            <Slider {...projSettings} ref={slider}>
              {projectTypeObj.projects.map((typeProjectsObj) => {
                return (
                  <AddProject
                    heading={typeProjectsObj.name}
                    type={projectType}
                    stack={typeProjectsObj.stack}
                    url={typeProjectsObj.url}
                    images={typeProjectsObj.images}
                  />
                );
              })}
            </Slider>
          );
        })}
      </div>
    </>
  );
};

export default Projects;

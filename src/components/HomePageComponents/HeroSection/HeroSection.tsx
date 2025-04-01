import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image1 from '../../../assets/img/1.jpg';
import Image2 from '../../../assets/img/18.jpg';
import { useState } from 'react';

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    arrows: true,
    pauseOnHover: false,
    beforeChange: (oldIndex, newIndex) => {
      setActiveIndex(newIndex); // Update active index
    },
   
  };

  const slides = [
    {
      src: Image1,
      title: 'welcome to mousiqua',
      subtitle: 'Music Band and Musician Bootstrap Template',
    },
    {
      src: Image2,
      title: 'limitless',
      subtitle: 'New Album Available Everywhere',
      video: 'https://www.youtube.com/watch?v=Gc2en3nHxA4',
    },
  ];

  return (
    <section className="hero">
      <Slider {...settings} className="main-slider">
        {slides.map((slide, index) => (
          <div key={`${index}`} className="slide-item">
            <div className={`background-img overlay zoom ${index === activeIndex ? "slick-active" : ""}`} >
              <img src={slide.src} alt="slide" />
            </div>
            <div className="container hero-content">
              <div className="row">
                <div className="col-sm-12 text-center">
                  <div className="inner-hero">
                    {index === 0 && <div className="back-rect"></div>}
                    <h1 className="large text-white uppercase mb-0">
                      {slide.title}
                    </h1>
                    <h5 className="mb-0 text-white uppercase">
                      {slide.subtitle}
                    </h5>
                    {index === 0 && <div className="front-rect"></div>}
                    {slide.video && (
                      <a
                        className="video-play-but popup-youtube"
                        href={slide.video}
                      ></a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <header className="header default">
        <div className="left-part">
          <a className="logo scroll" href="#wrapper">
            <h2 className="mb-0 uppercase">mousiqua.</h2>
          </a>
        </div>
        <div className="right-part">
          <nav className="main-nav">
            <div className="toggle-mobile-but">
              <a href="#" className="mobile-but">
                <div className="lines"></div>
              </a>
            </div>
            <ul className="main-menu list-inline">
              {[
                'Home',
                'about',
                'discography',
                'Band',
                'Tours',
                'Gallery',
                'News',
                'Contact',
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    className="scroll list-inline-item"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li className="block-helper">
                <a href="#album" className="scroll">
                  <span>
                    <i className="icon-cd-2"></i>
                  </span>
                </a>
              </li>
              <li className="block-helper">
                <span className="icon search-ico">
                  <i className="icon-search"></i>
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </section>
  );
};

export default HeroSection;

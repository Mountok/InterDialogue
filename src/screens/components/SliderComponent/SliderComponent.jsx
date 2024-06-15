// SliderComponent.jsx
import React from 'react';
import Slider from 'react-slick';
import { useSpring, animated } from 'react-spring';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'; // файл для кастомных стилей

const SliderComponent = () => {
  const settings = {
    dots: false, // Убираем точки
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: false,
    autoplay: true, // Включаем автоматическое переключение
    autoplaySpeed: 7000, // Интервал в миллисекундах (3 секунды)
    arrows: false, // Убираем кнопки навигации
  };

  const slides = [
    {
      id: 1,
      imageUrl: '/images/modern_city.jpeg',
    },
    {
      id: 2,
      imageUrl: '/images/Feeney.jpeg',


    },
    {
      id: 3,
      imageUrl: '/images/modern_office.jpg',
    },
    {
        id: 4,
        imageUrl: '/images/brusel.jpeg',
      },
      {
        id: 5,
        imageUrl: '/images/photo1716466398 (2).jpeg',
      },
      {
        id: 6,
        imageUrl: '/images/photo1716466398 (3).jpeg',
      },
      {
        id: 7,
        imageUrl: '/images/photo1716466398 (4).jpeg',
      },
      {
        id: 8,
        imageUrl: '/images/photo1716466398 (5).jpeg',
      },
      {
        id: 9,
        imageUrl: '/images/photo1716466398 (6).jpeg',
      },
      {
        id: 10,
        imageUrl: '/images/photo1716466398 (7).jpeg',
      },
      {
        id: 11,
        imageUrl: '/images/photo1716466398 (8).jpeg',
      },
      {
        id: 12,
        imageUrl: '/images/photo1716466398 (9).jpeg',
      },
      {
        id: 13,
        imageUrl: '/images/photo1716466398 (10).jpeg',
      },
      {
        id: 14,
        imageUrl: '/images/photo1716466398.jpeg',
      },
      {
        id: 15,
        imageUrl: '/images/photo1716466445 (1).jpeg',
      },
      {
        id: 6,
        imageUrl: '/images/photo1716466445 (2).jpeg',
      },
      {
        id: 17,
        imageUrl: '/images/photo1716466445 (3).jpeg',
      },
      {
        id: 18,
        imageUrl: '/images/photo1716466445 (4).jpeg',
      },
      {
        id: 19,
        imageUrl: '/images/photo1716466445 (5).jpeg',
      },
      {
        id: 20,
        imageUrl: '/images/photo1716466445 (6).jpeg',
      },
      {
        id: 21,
        imageUrl: '/images/photo1716466445 (7).jpeg',
      },
      {
        id: 22,
        imageUrl: '/images/photo1716466445 (8).jpeg',
      },
      {
        id: 23,
        imageUrl: '/images/photo1716466445 (9).jpeg',
      },
      {
        id: 24,
        imageUrl: '/images/photo1716466445.jpeg',
      },
      {
        id: 25,
        imageUrl: '/images/photo1716466461 (1).jpeg',
      },
      {
        id: 26,
        imageUrl: '/images/photo1716466461 (2).jpeg',
      },
      {
        id: 27,
        imageUrl: '/images/photo1716466461 (3).jpeg',
      },
      {
        id: 28,
        imageUrl: '/images/photo1716466461 (4).jpeg',
      },
      {
        id: 29,
        imageUrl: '/images/photo1716466461.jpeg',
      },
  ];

  return (
    <Slider {...settings}>
      {slides.map(slide => (
        <Slide key={slide.id} imageUrl={slide.imageUrl} />
      ))}
    </Slider>
  );
};

const Slide = ({ imageUrl }) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  });

  return (
    <animated.div style={props} className="slide">
      <img className="slide_image"  src={imageUrl} alt="slide" />
    </animated.div>
  );
};

export default SliderComponent;

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import { topMeels } from "../../../Data/topMeels";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const responsive = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
    },
  },
  {
    breakpoint: 900,
    settings: {
      slidesToShow: 3,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
    },
  },
];

export default function MultipleItemsCarousel() {
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation

  // Handle the click event to navigate to the restaurant page
  const handleItemClick = (restaurantId) => {
    navigate(`/restaurant/${restaurantId}`); // Navigate to the restaurant page with restaurantId
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive,
  };

  return (
    <div>
      <Slider {...settings}>
        {topMeels.map((item, index) => (
          <CarouselItem
            key={index}
            image={item.image}
            title={item.title}
            restaurantId={item.id} // Pass the restaurantId to each CarouselItem
            onClick={handleItemClick} // Pass the handleItemClick function for navigation
          />
        ))}
      </Slider>
    </div>
  );
}

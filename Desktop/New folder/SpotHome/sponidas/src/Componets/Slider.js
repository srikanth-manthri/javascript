import React, { useState, useEffect } from "react";
import Slider from "react-slick";

function MySlider() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/slider")
      .then((response) => response.json())
      .then((data) => setSliderData(data))
      .catch((error) => console.error(error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {sliderData.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </Slider>
  );
}
export default MySlider;
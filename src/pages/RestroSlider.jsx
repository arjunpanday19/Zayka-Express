import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Restro1 from '../assets/Images/Restro1.jpg'
import Restro2 from '../assets/Images/Restro2.jpg'
import Restro3 from '../assets/Images/Restro3.jpg'
import Restro4 from '../assets/Images/Restro4.jpg'
import Restro5 from '../assets/Images/Restro5.jpg'
import Restro6 from '../assets/Images/Restro6.jpg'
import Restro7 from '../assets/Images/Restro7.jpg'
// import Restro8 from '../assets/Images/Restro8.jpg'
import SProduct from './SProduct';
const RestroSlider = () => {
    var settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='slider py-5'>
        <h4 className='text-center display-4 mt-4 fw-bold' style={{ color: "#0F172A" }}>
            Restaurants Near you!
        </h4>
        <div className='container mt-5 '>
            <Slider {...settings}>
                <div className='p-1 shadow'>
                    <SProduct 
                        Image = {Restro1}
                        Description="STEP-IN Cafe"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Restro2}
                        Description="The TAJ"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Restro3}
                        Description="The Tondon Bakery & Restro"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Restro4}
                        Description="Sharma's Kitchen"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Restro5}
                        Description="The Royal Table"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Restro6}
                        Description="Grand Palace Cuisine"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Restro7}
                        Description="The Spice Route"
                    />
                </div>
                {/* <div className='p-1 shadow'>
                <SProduct 
                        Image = {Restro8}
                        Description="A popular North Indian dish that consists of spicy chickpeas (choley) served with deep-fried bread (bhature)"
                    />
                </div> */}
            </Slider>
        </div>
    </div>
  )
}

export default RestroSlider;
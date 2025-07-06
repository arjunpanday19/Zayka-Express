import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Veg1 from '../assets/Images/vege.jpg'
import Veg2 from '../assets/Images/vege2.jpg'
import Veg3 from '../assets/Images/vege3.webp'
import Veg4 from '../assets/Images/vege4.jpg'
import Veg5 from '../assets/Images/vege5.jpg'
import Veg6 from '../assets/Images/vege6.jpg'
import Veg7 from '../assets/Images/vege7.jpg'
import Veg8 from '../assets/Images/vege8.jpg'
import SProduct from './SProduct';
const ProductSlider = () => {
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
            Fresh Restaurant Ready Food 
            <br /> To Your Doorstep!
        </h4>
        <div className='container mt-5 '>
            <Slider {...settings}>
                <div className='p-1 shadow'>
                    <SProduct 
                        Image = {Veg1}
                        Description="An Indian dish of paneer, originating in New Delhi, in which the gravy is prepared usually with butter (makhan), tomatoes and cashews"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Veg2}
                        Description="A delicious Pakistani/Indian rice dish that's typically reserved for special occasions such as weddings, parties, or holidays such as Ramadan."
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Veg3}
                        Description="A complete, balanced meal served on a platter"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Veg4}
                        Description="A dish made from chicken marinated in yogurt and spices and roasted in a tandoor, a cylindrical clay oven"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Veg5}
                        Description="A roasted dosa served with potato curry, chutney, and sambar"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Veg6}
                        Description="A type of flatbread that is popular in Indian cuisine"
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Veg7}
                        Description="A steamed dumpling made from wheat dough flat and stuffed with minced vegetables, spices and herbs usually served with chutneys/soup."
                    />
                </div>
                <div className='p-1 shadow'>
                <SProduct 
                        Image = {Veg8}
                        Description="A popular North Indian dish that consists of spicy chickpeas (choley) served with deep-fried bread (bhature)"
                    />
                </div>
            </Slider>
        </div>
    </div>
  )
}

export default ProductSlider;
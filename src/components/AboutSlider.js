import React from "react";
import Slider from "react-slick";
import About1 from '../assets/images/Deacon-About-01.jpg';
import About2 from '../assets/images/Deacon-About-02.jpg';
import About3 from '../assets/images/Deacon-About-M-3.jpg';
import About4 from '../assets/images/Deacon-About-M-4.jpg';
import About5 from '../assets/images/Deacon-About-M-5.jpg';

const AboutSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='deacon-about__slider'>
        <Slider {...settings} >
            <div className='deacon-about__slider-image-container'>
                <img className='deacon-about__slider-image' src={About2} alt='blueprints' />
            </div>
            <div className='deacon-about__slider-image-container'>
                <img className='deacon-about__slider-image'src={About1} alt='furniture plans' />
            </div>
            <div className='deacon-about__slider-image-container'>
                <img className='deacon-about__slider-image' src={About3} alt='blueprints' />
            </div>
            <div className='deacon-about__slider-image-container'>
                <img className='deacon-about__slider-image' src={About4} alt='blueprints' />
            </div>
            <div className='deacon-about__slider-image-container'>
                <img className='deacon-about__slider-image' src={About5} alt='blueprints' />
            </div>
        </Slider>
        </div>
    )
}

export default AboutSlider;

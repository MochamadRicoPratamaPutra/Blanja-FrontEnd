import React, { Component } from "react"
import Slider from "react-slick"
import Style from './carousel.module.css'
import Image1 from '../../assets/benjamin-voros-TnNo84AJJ5A-unsplash 1.jpg'
import Image2 from '../../assets/ian-dooley-10ca-K3e6Ko-unsplash 1.jpg'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, marginRight: "40px", zIndex: "10" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, marginLeft: "40px", zIndex: "10", opacity: "10" }}
            onClick={onClick}
        />
    );
}
export default class Carousel extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        dots: true,
                        infinite: true,
                        speed: 500,
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                }
            ]
        };
        return (
            <div className={Style.contain}>
                <Slider {...settings}>
                    <div className={Style.wrapper}>
                        <img src={Image1} className={Style.imgItem} alt='imgSlider'/>
                        <h3 className={Style.textCategory}>Best in 2018</h3>
                    </div>
                    <div className={Style.wrapper}>
                        <img src={Image2} className={Style.imgItem} alt='imgSlider'/>
                        <h3 className={Style.textCategory}>Best in 2019</h3>
                    </div>
                    <div className={Style.wrapper}>
                        <img src={Image1} className={Style.imgItem} alt='imgSlider'/>
                        <h3 className={Style.textCategory}>Best in 2020</h3>
                    </div>
                    <div className={Style.wrapper}>
                        <img src={Image2} className={Style.imgItem} alt='imgSlider'/>
                        <h3 className={Style.textCategory}>Best in 2021</h3>
                    </div>
                </Slider>
            </div>
        );
    }
}

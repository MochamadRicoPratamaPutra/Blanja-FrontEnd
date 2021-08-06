import React, { Component } from "react"
import Slider from "react-slick"
import Style from './carousel.module.css'
import CategoryImage from './category'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from "react-router-dom";

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
export default class CarouselCategory extends Component {
    render() {
        const settings = {
            // dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        // dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        nextArrow: <SampleNextArrow />,
                        prevArrow: <SamplePrevArrow />
                    }
                }
            ]
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className={Style.wrapper}>
                        <Link to="/category/clear file?page=1&limit=3">
                            <img src={CategoryImage.Category1} alt='imgCategory'className={Style.imgItem1} />
                            <h3 className={Style.textCategory}>ATK</h3>
                        </Link>
                    </div>
                    <div className={Style.wrapper}>
                        <Link to="/category/handphone">
                            <img src={CategoryImage.Category2} alt='imgCategory'className={Style.imgItem2} />
                            <h3 className={Style.textCategory}>Handphone</h3>
                        </Link>
                    </div>
                    <div className={Style.wrapper}>
                        <Link to="/category/headphone">
                            <img src={CategoryImage.Category3} alt='imgCategory'className={Style.imgItem3} />
                            <h3 className={Style.textCategory}>Headphone</h3>
                        </Link>
                    </div>
                    <div className={Style.wrapper}>
                        <Link to="/category/jacket">
                            <img src={CategoryImage.Category4} alt='imgCategory'className={Style.imgItem4} />
                            <h3 className={Style.textCategory}>Jacket</h3>
                        </Link>
                    </div>
                    <div className={Style.wrapper}>
                        <Link to="/category/laptop">
                            <img src={CategoryImage.Category5} alt='imgCategory'className={Style.imgItem5} />
                            <h3 className={Style.textCategory}>Laptop</h3>
                        </Link>
                    </div>
                    <div className={Style.wrapper}>
                        <Link to="#">
                            <img src={CategoryImage.Category6} alt='imgCategory'className={Style.imgItem6} />
                            <h3 className={Style.textCategory}>T-Shirt</h3>
                        </Link>
                    </div>
                    <div className={Style.wrapper}>
                        <Link to="#">
                            <img src={CategoryImage.Category7} alt='imgCategory'className={Style.imgItem7} />
                            <h3 className={Style.textCategory}>Pants</h3>
                        </Link>
                    </div>
                    <div className={Style.wrapper}>
                        <Link to="#">
                            <img src={CategoryImage.Category8} alt='imgCategory'className={Style.imgItem8} />
                            <h3 className={Style.textCategory}>Jeans</h3>
                        </Link>
                    </div>
                    <div className={Style.wrapper}>
                        <Link to="#">
                            <img src={CategoryImage.Category9} alt='imgCategory'className={Style.imgItem9} />
                            <h3 className={Style.textCategory}>Shoe</h3>
                        </Link>
                    </div>
                    <div className={Style.wrapper}>
                        <Link to="#">
                            <img src={CategoryImage.Category10} alt='imgCategory' className={Style.imgItem10} />
                            <h3 className={Style.textCategory}>Wristwatch</h3>
                        </Link>
                    </div>
                </Slider>
            </div>
        );
    }
}

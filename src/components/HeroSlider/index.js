import React from "react";
import { Carousel } from "react-responsive-carousel";
import HeroImg from "../../assets/images/hero.jpeg";
import HeroImg2 from "../../assets/images/hero2.jpeg";
import HeroImg3 from "../../assets/images/hero3.jpeg";

import classes from "./heroSlider.module.css";
import "react-responsive-carousel/lib/styles/carousel.css";

export default function HeroSlider() {
    return (
        <Carousel
            className={classes.sliderWrapper}
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
        >
            <div className={classes.heroImg}>
                <img src={HeroImg} alt="hero" />
            </div>
            <div className={classes.heroImg}>
                <img src={HeroImg2} alt="hero" />
            </div>
            <div className={classes.heroImg}>
                <img src={HeroImg3} alt="hero" />
            </div>
        </Carousel>
    );
}

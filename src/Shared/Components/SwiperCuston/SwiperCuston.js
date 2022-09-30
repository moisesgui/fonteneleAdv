import React from 'react';
import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import fachada from '../../../assets/imgs/fachada.jpg';
import patio from '../../../assets/imgs/patio.jpg';
import elevadores from '../../../assets/imgs/elevadores.jpg';
import estacionamento from '../../../assets/imgs/estacionamento.jpg';
import sala1 from '../../../assets/imgs/sala1.jpg';
import sala2 from '../../../assets/imgs/sala2.jpg';
import sala3 from '../../../assets/imgs/sala3.jpg';

 
const SwiperCuston = () => {

  const imgs = [
    fachada,
    patio,
    elevadores,
    estacionamento,
    sala1,
    sala2,
    sala3,
  ]

  const settings = {
    lazyload: true,
    nav: false,
    mouseDrag: true,
    loop: true,
    items: 3,
    edgePadding: 50,
    gutter: 5,
    controls: false,
    speed: 400,
    autoplay: true,
    autoplayTimeout: 3500,
    responsive: {
      420: {
        items: 2
      }
    },
    swipeAngle: false
  };

  const imgStyles = {
    width: "100%",
    height: "320px",
    objectFit: "cover"
  };

  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
 
  return(
    <div class="tns-content" style={styles}>
      <TinySlider settings={settings}>
        {imgs.map((el, index) => (
          <div key={index} style={{ position: "relative" }}>
            <img
              className={`tns-lazy-img`}
              src={el}
              data-src={el}
              alt=""
              style={imgStyles}
            />
          </div>
        ))}
      </TinySlider>
    </div>
  )
}
 
export default SwiperCuston;


import React, {useEffect} from "react";

import Course from "../../Shared/Components/Course/Course";
import Facilities from "../../Shared/Components/Facilities/Facilities";
import Testimonials from "../../Shared/Components/Testimonials/Testimonials";
import Footer from "../../Shared/Components/Footer/Footer";

import "./Home.style.css";
import logo from "../../assets/imgs/abelardocastelo-logo.png";
import ctps from "../../assets/imgs/ctps-0.png";
import { FaWhatsapp, FaInstagram, FaCheck } from 'react-icons/fa';


const Home = () => {

  const goAboutUs = () => document.getElementById("aboutUs").scrollIntoView();

  useEffect(()=>{
    window.onscroll = function () {
      var header = document.getElementById("myHeader");
      var navLinks = document.getElementById("navbar");

      if (window.pageYOffset > 550) {
        header.classList.add("sticky");
        navLinks.classList.add("nav-sticky");
      } else {
        header.classList.remove("sticky");
      }
  
    };
  },);
  

  return (
    <>
      <div class="header">
        <nav id="myHeader" class="span-header">
          <a href="index.html">
            <img src={logo} alt="Logo" />
          </a>
          <div id="navbar" class="nav-links">
            <ul class="nav-items">
              <li>
                <a href="index.html">HOME</a>
              </li>
              <li>
                <a  onClick={() => goAboutUs()}>SOBRE NÓS</a>
              </li>
              <li>
                <a href="index.html">CONTATO</a>
              </li>
            </ul>
          </div>
        </nav>
        <div class="text-box">
          <h1>ABELARDO CASTELO BRANCO</h1>
          <div class="divide"></div>
          <p>
            ADVOCACIA E CONSULTORIA JURÍDICA
          </p>
          <div class="btn-whats">
            <a class="btn-hero" href="https://api.whatsapp.com/send?phone=5585986900473" target="_blank">
              <FaWhatsapp 
                size="55px"
              />
              FALE AGORA PELO WHATSAPP
            </a>
          </div>
          <div class="btn-insta">
            <a class="btn-hero-2" href="https://instagram.com/abelardocastelobranco.adv?igshid=NmZiMzY2Mjc=" target="_blank">
              <FaInstagram 
                size="50px"
              />
              ACESSE O NOSSO INSTAGRAM
            </a>
          </div>
        </div>
      </div>
      <div class="ctps-container" data-aos="fade-up">
        <div>
          <img class="ctps-image" src={ctps} alt="ctps" />
        </div>
        <div class="ctps-content">
          <h4>Foi demitido sem os devidos direitos?</h4>
          <span>Entre em contato com a gente agora mesmo e garanta seus direitos. A justiça socorre aqueles que vão em busca dos seus direitos.</span>
            <a class="ctps-btn" href="https://api.whatsapp.com/send?phone=5585986900473" target="_blank">
              Click aqui e saiba mais
            </a>
        </div>
      </div>
      <div class="course-content" data-aos="fade-up">
        <Course />
      </div>
      <div id="aboutUs" data-aos="fade-up">
        <Facilities />
      </div>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <Testimonials />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default Home;
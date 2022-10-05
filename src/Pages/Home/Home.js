import React, {useEffect} from "react";

import Course from "../../Shared/Components/Course/Course";
import Facilities from "../../Shared/Components/Facilities/Facilities";
import Footer from "../../Shared/Components/Footer/Footer";

import "./Home.style.css";
import logo from "../../assets/imgs/logo.png";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';


const Home = () => {

  const goAboutUs = () => document.getElementById("aboutUs").scrollIntoView();

  useEffect(()=>{
    window.onscroll = function () {
      var header = document.getElementById("myHeader");
      var navLinks = document.getElementById("navbar");

      if (window.pageYOffset > 300) {
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
          <h1>UCHOA & OLIVEIRA</h1>
          <div class="divide"></div>
          <p>
            ADVOGADOS ASSOCIADOS
          </p>
          <div class="btn-whats">
            <a class="btn-hero" href="https://api.whatsapp.com/send?phone=5585999994785" target="_blank">
              <FaWhatsapp 
                size="55px"
              />
              FALE AGORA PELO WHATSAPP
            </a>
          </div>
        </div>
      </div>
      <div class="course-content" data-aos="fade-up">
        <Course />
      </div>
      <div class="ctps-container" data-aos="fade-up">
        <div class="ctps-content">
          <h4>Fale com um de nossos advogados</h4>
          <div class="btn-whats">
            <a class="btn-hero" href="https://api.whatsapp.com/send?phone=5585999994785" target="_blank">
              <FaWhatsapp 
                size="55px"
              />
              FALE AGORA PELO WHATSAPP
            </a>
          </div>
        </div>
      </div>
      <div id="aboutUs" data-aos="fade-up">
        <Facilities />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default Home;
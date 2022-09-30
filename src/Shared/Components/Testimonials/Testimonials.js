import React from "react";
import Iframe from "react-iframe";
import SwiperCuston from "../SwiperCuston/SwiperCuston";

import user1 from "../../../assets/imgs/WhatsApp Image 2021-11-30 at 16.31.19.jpeg";
import user2 from "../../../assets/imgs/user1.jpg";

import "./Testimonials.style.css";

const Testimonials = () => {
  return (
    <section class="testimonials">
      <h1>Avaliações e Depoimentos</h1>
      <p>O que os nossos clientes pensam sobre nós.</p>
      <div class="row">
        <div class="testimonials-col" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <img src={user1} alt="user1" />
          <div>
            <p>
              Atendimento excelente, objetividade e clareza nas informações. Um profissional
              muito competente.
            </p>
            <h3>Moisés Guilherme</h3>
          </div>
        </div>
        <div class="testimonials-col" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <img src={user2} alt="user2" />
          <div>
            <p>
            Fui muito bem assistida e auxiliada em todo o decorrer do processo.
            Recomendo e agora sou cliente.
            </p>
            <h3>Ana Cecília Lima</h3>
          </div>
        </div>
      </div>
      <div class="map-container" data-aos="zoom-out-up">
      <h1>Localização</h1>
      <p>Aqui você pode conferir onde estamos localizados.</p>
      <div data-aos="zoom-out-up">
        <SwiperCuston />
      </div>
        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3417303863193!2d-38.5016852!3d-3.7354986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74861e3cc7165%3A0xf0da6bfd8e0cd494!2sAv.%20Santos%20Dumont%2C%202626%20-%20Sala%20804%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060150-162!5e0!3m2!1spt-BR!2sbr!4v1652621074211!5m2!1spt-BR!2sbr"
          width="100%"
          height="450px"
          className="local-maps"
          display="initial"
          position="relative"
        />
      </div>
    </section>
  );
};

export default Testimonials;

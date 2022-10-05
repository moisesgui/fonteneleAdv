import React from "react";
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

import "./Campus.style.css";

const Campus = () => {
  return (
    <section class="campus">
      <h1>Fale com um de nossos advogados</h1>
      <div class="btn-whats">
          <a class="btn-hero" href="https://api.whatsapp.com/send?phone=5585999994785" target="_blank">
            <FaWhatsapp 
              size="55px"
            />
            FALE AGORA PELO WHATSAPP
          </a>
        </div>
    </section>
  );
};

export default Campus;

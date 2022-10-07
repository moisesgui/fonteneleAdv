import React from "react";
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./Footer.style.css";

const Footer = () => {
  return (
    <section>
      <div class="footer">
        <div class='span-footer'>
          <span>Nosso Endereço:</span>
        </div>
        <p>
        Av. Tristão Gonçalves, nº 959, Sala 101,<br></br> Centro, Fortaleza/CE,<br></br> CEP 60.015-000
        </p>
        <div class="contact-medias">
          <span>
            instagram
          </span>
          <a href="https://instagram.com/uchoaeoliveiraadv?igshid=YmMyMTA2M2Y=" target="_blank">
            <FaInstagram
              style={{ color: "#fff", fontSize: "40px", padding: "8px" }}
            />
          </a>
        </div>
      </div>
      <div class="copy">
      <p>© Copyright Uchoa&Oliveira - Todos os direitos reservados</p>
      </div>
    </section>
  );
};

export default Footer;

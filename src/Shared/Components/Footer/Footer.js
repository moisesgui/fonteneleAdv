import React from "react";
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import "./Footer.style.css";

const Footer = () => {
  return (
    <section>
      <div class="footer">
        <p>
          "Faz de mim um profissional justo e honesto no exercício da minha profissão. Que eu tenha ética e moral. Que eu seja competente sem ser arrogante e não me permita nunca aceitar causas injustas e nem superiores às que sou capaz de fazer. Que a minha luta seja sempre em favor da justiça."
        </p>
        <div class="contact-medias">
          <a href="https://www.facebook.com" target="_blank">
            <FaFacebook
            style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
          />
          </a>

          <a href="https://instagram.com/abelardocastelobranco.adv?igshid=NmZiMzY2Mjc=" target="_blank">
            <FaInstagram
              style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
            />
          </a>

          <a href="https://www.linkedin.com" target="_blank">
            <FaLinkedin
              style={{ color: "#fff", fontSize: "30px", padding: "10px" }}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;

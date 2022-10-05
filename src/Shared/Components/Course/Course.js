import React from "react";

import { FaCheck } from 'react-icons/fa';
import "./Couse.style.css";

const Course = () => {
  return (
    <section class="course">
      <h1>Áreas de atuação</h1>
      <p class="course-title">
        Aqui você encontra os Principais problemas trabalhistas. 
      </p>
        <span>Clique na opção desejada para diretamente conosco.</span>
      <div class="course-container" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div>
          <div class="course-item">
            <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%2C%20sobre%20a%20demiss%C3%A3o%20com%20ou%20sem%20justa%20causa!" target="_blank"><FaCheck size="16px" />Demissão com ou sem justa causa</a>
            <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%2C%20sobre%20horas%20extras%20n%C3%A3o%20pagas!" target="_blank"><FaCheck size="16px" />Horas extras não pagas</a>
            <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20adicional%20de%20periculosidade!" target="_blank"><FaCheck size="16px" />Adicional de periculosidade</a>
            <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20adicional%20de%20insalubridade!" target="_blank"><FaCheck size="16px" />Adicional de insalubridade</a>
            <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20adicional%20noturno!" target="_blank"><FaCheck size="16px" />Adicional noturno</a>
            <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20rescis%C3%A3o%20indireta!" target="_blank"><FaCheck size="16px" />Rescisão indireta</a>
          </div>
        </div>
        <div>
          <div class="course-item">
              <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20carteira%20de%20trabalho%20n%C3%A3o%20assinada!" target="_blank"><FaCheck size="16px" />Trabalhador avulso</a>
              <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20estabilidade%20gestante!" target="_blank"><FaCheck size="16px" />Estabiadade gestante</a>
              <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20caso%20de%20ass%C3%A9dio%20moral!" target="_blank"><FaCheck size="16px" />Direitos da doméstica</a>
              <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20n%C3%A3o%20pagamento%20de%20rescis%C3%A3o%20trabalhista!"><FaCheck size="16px" />Não pagamento de rescisão</a>
              <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20acidente%20de%20trabalho!" target="_blank"><FaCheck size="16px" />Acidente de trabalho</a>
              <a href="https://api.whatsapp.com/send?phone=5585999994785&text=Ol%C3%A1%20gostaria%20de%20tirar%20uma%20d%C3%BAvida..." target="_blank"><FaCheck size="16px" />Outro assunto...</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Course;
import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/45744241?s=460&u=abca30211f49d0a03e3a988c8b6e58ea1794cbd5&v=4"
          alt="Vitor"
        />
        <div>
          <strong>Vitor Porto</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Ddsahdusadhudsdusuh Dda isjds iasjd oidsaj oisajd
        <br /> <br />
        asoijasoidajsoasijdasasijsaoisajidjjdisaj ijdaso jdasi jdasio jsoaij
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 22,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;

import React from "react";

import "./styles.css";
import PageHeader from "../../components/Header";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList;

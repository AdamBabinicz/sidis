import React, { useState } from "react";
import img1 from "../../images/2.jfif";

function OurRobot() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="align-center p-6 w-60">
        <h2 className="mb-2">
          Borys Sidis stawiał na wiedzę jako klucz do życiowego sukcesu
        </h2>
        <p data-aos="fade-in" className="mb-2 lh-2 tl">
          Pragnął on udowodnić sobie i światu, że geniusza można stworzyć.
          Niezbędne są do tego jednak odpowiednie techniki, które powinny być
          wdrażane od najwcześniejszych chwil życia dziecka.
        </p>
        <button
          onClick={() => toggleTab(1)}
          className="btn btn-primary"
          data-aos="fade-in"
        >
          Czytaj
        </button>
        <div
          className={
            toggleState === 1
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <i
              onClick={() => toggleTab(0)}
              className="uil uil-times services__modal-close"
            ></i>
            <h3 className="services__modal-title">Złote dziecko</h3>
            <p className="services__modal-description">
              William urodził się w 1898 roku w Nowym Jorku. Jego rodzice
              również byli geniuszami, więc oczekiwania wobec syna były całkiem
              wysokie. Ojciec Boris był znanym psychologiem, który zdobył cztery
              dyplomy Harvardu, a matka była szanowaną lekarką. W miarę jak mały
              William dorastał, stało się jasne, że jego inteligencja znacznie
              przewyższa oczekiwania. Mając zaledwie 18 miesięcy od niechcenia
              czytał The New York Timesa, a wkrótce żadna literatura nie była mu
              straszna.
            </p>
            <div className="services__modal-services">
              <img src={img1} alt="..." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurRobot;

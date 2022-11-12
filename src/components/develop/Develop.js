import React, { useState } from "react";
import "./Develop.css";
import sophi from "../../images/6.png";
import sophi1 from "../../images/2.png";
import sophi2 from "../../images/1.png";
import img1 from "../../images/2.jpg";
import img2 from "../../images/4.jpg";

function Develop() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section id="geniusz">
        <div className="bg-black p-6">
          <div className="d-flex align-center justify-content-around robotics flex-column">
            <div className="robot-txt">
              <h2 className="lh-2">Genialny owoc naukowego eksperymentu</h2>
              <h4 className="lh-2 mt-1 tl">
                William James Sidis po narodzeniu nie wyróżniał się na tle
                innych noworodków, ale jego ojciec postanowił udowodnić sobie
                i&nbsp;światu, że&nbsp;stan ten można zmienić.
              </h4>
              <p className="lh-2 mt-1 tl">
                System opracowany przez Borysa Sidisa przyniósł spektakularne
                efekty. Po tym jak dziecku od najmłodszych lat pokazywano litery
                i&nbsp;uczono je, jak je wymawiać, chłopiec opanował płynnie
                język angielski i&nbsp;francuski, w których w wieku czterech
                lat... napisał swoją pierwszą książkę - na maszynie.
              </p>
              <button
                onClick={() => toggleTab(1)}
                className="mt-2 btn btn-secondary"
              >
                Więcej
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
                  <h3 className="services__modal-title">Czy było warto?</h3>
                  <p className="services__modal-description">
                    Dziś jest prawie zapomniany, choć jego historia przywołuje
                    wciąż aktualne i ważne dla rodziców pytanie o to, jak rodzi
                    się mały geniusz? Pomysł na badanie ilorazu inteligencji
                    dzieci pojawił się w 1905 roku za sprawą francuskiego
                    psychologa Alfreda Bineta, który wspólnie z lekarzem
                    Teodorem Simonem opracował specjalny test. Czy współcześnie
                    to dobry pomysł, aby cyfry, liczby oceniały nasz umysł?
                  </p>
                  <div className="services__modal-services">
                    <img src={img1} alt="..." />
                  </div>
                </div>
              </div>
            </div>
            <div className="robot-img">
              <img src={sophi} alt="..." />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="d-flex align-center justify-content-around robotics flex-column">
          <div className="robot-img">
            <img src={sophi1} alt="..." />
          </div>
          <div className="robot-txt">
            <img src={sophi2} alt="..." />
            <h2 className="lh-2 mt-1 fw">Trudny los młodego socjalisty</h2>
            <h4 className="lh-2 mt-1 tl">
              Ku zaskoczeniu rodziny i&nbsp;otoczenia, William James Sidis
              porzucił studia magisterskie z&nbsp;matematyki i&nbsp;stwierdził,
              że&nbsp;zostanie prawnikiem.
            </h4>
            <p className="lh-2 mt-1 tl">
              Finalnie zdecydował się zerwać jednak z&nbsp;życiem akademickim
              i&nbsp;bez podania przyczyny zrezygnował ze studiów na ostatnim
              roku w&nbsp;1919&nbsp;r. Tuż po tych wydarzeniach, deklarując się
              jako socjalista, wziął udział w&nbsp;paradzie pierwszomajowej
              w&nbsp;Bostonie, która przerodziła się w&nbsp;zamieszki. William
              James Sidis dostał się w&nbsp;ręce policji i&nbsp;został
              aresztowany oraz skazany na 18 miesięcy więzienia.
            </p>
            <button
              onClick={() => toggleTab(2)}
              className="mt-2 btn btn-secondary"
            >
              Więcej
            </button>
            <div
              className={
                toggleState === 2
                  ? "services__modal active-modal"
                  : "services__modal"
              }
            >
              <div className="services__modal-content">
                <i
                  onClick={() => toggleTab(0)}
                  className="uil uil-times services__modal-close"
                ></i>
                <h3 className="services__modal-title">Triumf czy porażka?</h3>
                <p className="services__modal-description">
                  Z biegiem lat coraz bardziej oddalał się od wizerunku
                  grzecznego geniusza. Został ateistą, socjalistą, a za udział w
                  zamieszkach w Bostonie trafił na 18 miesięcy do więzienia.
                  Rodzice, grożąc mu pobytem w szpitalu psychiatrycznym, wysłali
                  go na dwa lata do sanatorium. William jednak po tym czasie
                  postanowił ostatecznie odciąć się od swoich rodziców. Osiadł w
                  Nowym Jorku, gdzie podejmował się nisko płatnych prac.
                </p>
                <div className="services__modal-services grid">
                  <img src={img2} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Develop;

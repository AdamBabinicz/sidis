import { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./News.css";
import { useState } from "react";

class MultiItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <>
        <div className="bg-black" id="fototeka">
          <div className="robotics p-6">
            <h2 className="align-center mb-2">Fototeka</h2>
            <div className="slide-content swiper">
              <div className="slide-content">
                <div className="card-wrapper swiper-wrapper">
                  <Slider {...settings}>
                    <div className="card swiper-slide">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image rob-1">
                          <img
                            src="../../images/10.jpg"
                            alt="..."
                            className="card-img"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="name">
                          <em>archiwum</em>
                        </h2>
                        <p className="description">
                          Umysł dziecka można kształtować na długo przed tym,
                          nim pozna mowę. Jeśli rodzice będą podchodzić do
                          dziecka rozsądnie, przekazywać prawdziwe informacje i
                          uzasadniać je logicznie, wyostrzy to możliwości nawet
                          najmłodszego dziecka.
                        </p>
                        <a
                          href="https://www.medonet.pl/zdrowie/zdrowie-dla-kazdego,william-james-sidis--genialne-dziecko--ktore-bylo-ofiara-eksperymentu-ojca,artykul,19895889.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-success">Więcej</button>
                        </a>
                      </div>
                    </div>
                    <div className="card swiper-slide">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image rob-1">
                          <img
                            src="../../images/12.jpg"
                            alt="..."
                            className="card-img"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="name">
                          <em>archiwum</em>
                        </h2>
                        <p className="description">
                          Chłopiec miał płynnie posługiwać się ośmioma językami,
                          a w powtarzanych testach IQ miał osiągać wyniki, które
                          dochodziły do 300 punktów. Dziecko w wieku ośmiu lat
                          stworzyło także swój własny, sztuczny język o nazwie
                          vendergood i opracowało jego gramatykę i ortografię.
                          Vendergood opierał się na łacinie i grece oraz czerpał
                          z niemieckiego, francuskiego i innych języków
                          romańskich.
                        </p>
                        <a
                          href="https://buzz.gazeta.pl/buzz/7,156947,28512708,tragiczna-historia-genialnego-dziecka-po-latach-eksperymentu.html"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-success">Więcej</button>
                        </a>
                      </div>
                    </div>
                    <div className="card swiper-slide">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image rob-1">
                          <img
                            src="../../images/13.jpg"
                            alt="..."
                            className="card-img"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="name">
                          <em>archiwum</em>
                        </h2>
                        <p className="description">
                          William James Sidis poszedł w ślady swego znanego ojca
                          i skierował swe kroki na Uniwersytet Harvarda. Dziecko
                          bezproblemowo zdało egzaminy na studia, lecz władze
                          uczelni nie zdecydowały się na jego przyjęcie.
                          Stwierdzono, że chłopiec jest niezwykle rozwinięty
                          umysłowo, ale pod względem rozwoju emocjonalnego jest
                          nadal dzieckiem.
                        </p>
                        <a
                          href="https://jedynka.polskieradio.pl/artykul/2823988"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-success">Więcej</button>
                        </a>
                      </div>
                    </div>
                    <div className="card swiper-slide">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image rob-1">
                          <img
                            src="../../images/5.jpg"
                            alt="..."
                            className="card-img"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="name">
                          <em>archiwum</em>
                        </h2>
                        <p className="description">
                          Pod naciskiem prasy jeden z profesorów przekonał swych
                          kolegów, by dać genialnemu dziecku szansę i tak młody
                          William James Sidis w wieku 11 lat został przyjęty na
                          jedną z najlepszych uczelni wyższych na świecie.
                        </p>
                        <a
                          href="https://ciekawostkihistoryczne.pl/2021/09/11/william-james-sidis-geniusz-mimo-woli-historia-najmadrzejszego-dziecka-xx-wieku"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-success">Więcej</button>
                        </a>
                      </div>
                    </div>
                    <div className="card swiper-slide">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image rob-1">
                          <img
                            src="../../images/11.jpg"
                            alt="..."
                            className="card-img"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="name">
                          <em>archiwum</em>
                        </h2>
                        <p className="description">
                          Bardzo szybko opanował wyższą matematykę i zaczął
                          prowadzić wykłady w Harvard Mathematical Club na temat
                          czterowymiarowych figur geometrycznych. Niestety,
                          zgodnie z wcześniejszymi przewidywaniami władz
                          Uniwersytetu Harvarda, studia akademickie i życie w
                          środowisku studenckim były dużym obciążeniem dla
                          genialnego nastolatka. Mając zaledwie 12 lat, przeżył
                          załamanie psychiczne.
                        </p>
                        <a
                          href="https://pl.wikipedia.org/wiki/William_James_Sidis"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-success">Więcej</button>
                        </a>
                      </div>
                    </div>
                    <div className="card swiper-slide">
                      <div className="image-content">
                        <span className="overlay"></span>
                        <div className="card-image rob-1">
                          <img
                            src="../../images/14.jpg"
                            alt="..."
                            className="card-img"
                          />
                        </div>
                      </div>
                      <div className="card-content">
                        <h2 className="name">
                          <em>archiwum</em>
                        </h2>
                        <p className="description">
                          W wieku 16 lat, 18 czerwca 1914 r., ukończył studia
                          licencjackie z wyróżnieniem. Niedługo po ukończeniu
                          studiów pierwszego stopnia i dostaniu się na studia
                          magisterskie wyjawił żądnym nowych doniesień
                          dziennikarzom, że chciałby żyć w odosobnieniu.
                          Stwierdził też, że planuje żyć w celibacie i nigdy się
                          nie ożeni.
                        </p>
                        <a
                          href="https://nauka.rocks/historia-najinteligentniejszego-czlowieka-w-histori-iq-250-william-james-sidis"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="btn btn-success">Więcej</button>
                        </a>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MultiItems;

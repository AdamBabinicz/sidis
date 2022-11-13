import React from "react";
import "./Footer.css";
import img from "../../images/8.png";

function Footer({ listitem }) {
  return (
    <>
      <footer id="kontakt">
        <div className="bg-black p-6">
          <div className="robotics">
            <div className="d-flex justify-content-between flex-column">
              {listitem.map((curElem) => {
                return (
                  <div className="b-1">
                    <h2 className="mb-2">{curElem.title}</h2>
                    <p>
                      <a
                        href="https://www.dobresobie.pl/wiedza-i-nauka/719/poznajcie-williama-jamesa-sidisa-prawdopodobnie-najinteligentniejszego-czlowieka-w-historii"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {curElem.title1}
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.youtube.com/watch?v=T3pJ09FTE4s"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {curElem.title2}
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://brainboss.pl/uncategorized/najwieksi-mlodzi-geniusze-w-historii"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {curElem.title3}
                      </a>
                    </p>
                  </div>
                );
              })}
              <img src={img} alt="..." />
              <div className="b-1">
                <h2 className="mb-2">Radom</h2>
                <div className="mb-1">2022 - {new Date().getFullYear()}.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

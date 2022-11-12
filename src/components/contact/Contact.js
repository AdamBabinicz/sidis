import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="media">
        <div className="w-60 p-6">
          <div className="w-60">
            <p className="lh-2 mb-1">
              „Zdecydowaliśmy od samego początku traktować Billiego jak
              dorosłego człowieka” – pisała w&nbsp;nieopublikowanej książce 'Jak
              wychować geniusza' Sara Sidis. Borys powiedział mi, że&nbsp;umysł
              dziecka można kształtować na długo przed tym, nim pozna mowę.
              Że&nbsp;jeśli rodzice będą podchodzić do dziecka rozsądnie,
              przekazywać prawdziwe informacje i&nbsp;uzasadniać je logicznie,
              wyostrzy to możliwości nawet najmłodszego dziecka. W&nbsp;końcu
              umysł buduje się tak jak mięśnie, a&nbsp;te nie powstają od
              leżenia w łóżku. Mieliśmy zachęcać nasze dziecko do myślenia, do
              podążania każdą ścieżką, której zapragnie, do rozwijania
              zainteresowań. Mieliśmy odpowiadać na wszystkie jego pytania tak
              precyzyjnie i&nbsp;tak długo, aż&nbsp;on sam uzna, że&nbsp;uzyskał
              odpowiedź.
            </p>
            {/* <div className="mb-1" data-aos="fade-in">
              <input type="text" placeholder="Email" className="email-input" />
            </div>
            <div data-aos="fade-in">
              <button className="btn btn-danger">Subskrybuj</button>
            </div> */}
            <div
              className="mt-4 d-flex justify-content fs-30 myIcon"
              data-aos="fade-in"
            >
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaPinterestP />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

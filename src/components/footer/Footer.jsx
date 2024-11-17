import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Elhoot</h1>

            <ul className='footer__list'>
                <li>
                  <a href="#about" 
                  className="footer__link">About</a>
                </li>

                <li>
                  <a href="#portfolio" 
                  className="footer__link">Projects</a>
                </li>

                <li>
                  <a href="#testimonials" 
                  className="footer__link">Testimonials</a>
                </li>

                <li>
                  <a href="#" className="footer__link"></a>
                </li>
            </ul>

            <div className="footer__social">
            <a href="https://www.facebook.com/profile.php?id=100012049360887&mibextid=LQQJ4d" 
            className="footer__social-link" target="_blank">
            <i class="bx bxl-facebook"></i>
        </a>

        <a href="https://www.instagram.com/el_ho.ot?igsh=NW84MWNwMmM0b3ht&utm_source=qr" 
        className="footer__social-link" target="_blank">
        <i class="bx bxl-instagram"></i>
        </a>

        <a href="https://mobile.twitter.com/mm300396" 
        className="footer__social-link" target="_blank">
        <i class="bx bxl-twitter"></i>
         </a>
        </div>

            <span className='footer__copy'>
              &#169; Crypticalcoder . All reserved
            </span>
        </div>
    </footer>
  );
};

export default Footer;

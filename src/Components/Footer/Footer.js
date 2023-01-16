import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div className="description">
        <img src="Flag_of_the_Red_Cross.svg.png" className="description__img" />
        <p className="description__p">
          Spinning is one of the most widespread and popular techniques around
          the world for that can be done in both saltwater and freshwater.
        </p>
      </div>

      <ul className="description__ul">
        <li className="footer__li">
          <i className="fab fa-facebook"></i>
          <a
            className="footer__a"
            href="https://www.facebook.com/groups/262191725221158"
          >
            Facebook
          </a>
        </li>
        <li className="footer__li">
          <i className="fab fa-twitter"></i>
          <a className="footer__a" href="https://twitter.com">
            Twitter
          </a>
        </li>
        <li className="footer__li">
          <i className="fab fa-instagram"></i>
          <a className="footer__a" href="https://instagram.com">
            Instagram
          </a>
        </li>
      </ul>

      <ul className="description__ul">
        <li className="footer__li">
          <i className="fa-solid fa-heart-pulse"></i>
          <Link className="footer__a" to="/about">
            About
          </Link>
        </li>
        <li className="footer__li">
          <i className="fa-solid fa-phone"></i>
          <Link className="footer__a" to="/contacts">
            Contacts
          </Link>
        </li>
      </ul>
    </footer>
  );
};

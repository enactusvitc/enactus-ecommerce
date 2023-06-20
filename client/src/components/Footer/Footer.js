import "./Footer.css";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__items__container">
          <div className="footer__help__container">
            <div className="footer__help__header">
              <h1>Help</h1>
            </div>
            <ul className="fotter__help__links">
              <li className="help__link">
                <a href="/" className="icon"> Shipping</a>
              </li>
              <li className="help__link">
                <a href="/" className="icon">Refund</a>
              </li>
              <li className="help__link">
                <a href="/" className="icon">FAQ</a>
              </li>
              <li className="help__link">
                <a href="/" className="icon">Accessiblity</a>
              </li>
            </ul>
          </div>
          <div className="footer__contact__container">
            <div className="footer__contact__header">
              <h1>Contact Us</h1>
            </div>
            <ul className="footer__contacts">
              <li className="footer__contact">
                <LocalPhoneIcon className="footer__contact__icons"/> <span>+123 4567 890</span>
              </li>
              <li className="footer__contact">
                <EmailIcon className="footer__contact__icons"/> <span>enactusvitc@gmail.com</span>
              </li>
              <li className="footer__contact">
                <LocationOnIcon className="footer__contact__icons"/> <span>Kelambakkam, Chennai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
          <div className="footer__social__link__container">
            <div className="footer__social__link__header">
              <h1>Stay Connected</h1>
            </div>
            <ul className="footer__social__links">
              <li className="social__link">
                <a href='/' className="social__link" target="__blank">
                  <TwitterIcon className="icon"/>
                </a>
              </li>
              <li className="social__link">
                <a href='/' className="social__link" target="__blank">
                  <InstagramIcon className="icon"/>
                </a>
              </li>
              <li className="social__link">
                <a href='/' className="social__link" target="__blank">
                  <YouTubeIcon className="icon"/>
                </a>
              </li>
              <li className="social__link">
                <a href='/' className="social__link" target="__blank">
                  <TelegramIcon className="icon"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="fotter__copyright__container">
          <ul className="nav">
            <li className="footer__copyright">©2023 Enactus VITC</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import "./NavBrand.css";
import { Link } from "react-router-dom";
import Logo from "../../../asset/img/enactus-logo-complete.png";

const NavBrand = () => {
  return (
    <div href="#home" className="navbrand__container">
      <h1 className="navbrand">
        <Link to="/">
          <img src={Logo} alt="Logo" className="navbrand__logo" />
        </Link>
      </h1>
    </div>
  );
};

export default NavBrand;

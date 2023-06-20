import "./Landing.css";
import land from "../../asset/img/vitchennai-banner.png";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Landing = () => {
  return (
    <div className="landing__container">
      <div className="landing__header__container">
        <div className="landing__header">
          <h3 className="landing__header__discount">ENACTUS VITC</h3>
          <h1 className="landing__header__main">
            We are a nonprofit organisation and work worldwide
          </h1>
          <Link to="/shop">
            <Button
              variant="outlined"
              sx={[
                {
                  width: "190px",
                  height: "50px",
                  borderRadius: "20px",
                  fontWeight: "700",
                  backgroundColor: "none",
                  borderColor: "#ffe26e",
                  color: "#ffe26e",
                },
                {
                  "&:hover": {
                    backgroundColor: "#ffe26e",
                    color: "black",
                    borderColor: "#ffe26e",
                  },
                },
              ]}
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
      <div className="landing__image__container">
        {/* <img className="landing__image" src={land} alt="" /> */}
      </div>
    </div>
  );
};

export default Landing;

import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import "./Hero.css"
import heroImg from "../../assets/phone.svg"

function Hero() {
  const {theme} = useContext(ThemeContext)

  return (
    <section className="hero"  data-theme={theme}>
      <div className="container --grid-15">
        <div className="hero-text">
          <h1>Visit Vila SHOP Landing Page.</h1>
          <p>
            {" "}
            It’s this focus that makes landing pages the best option for
            increasing the conversion rates of your marketing campaigns and
            lowering your cost of acquiring a lead or sale.
          </p>
          <div className="--flex-start"> 
            <button className="--btn btn-p">Learn More</button>
            <button className="--btn --btn-danger">Sign Up</button>
          </div> 
        </div>
        <div className="--text-center">
            <img src={heroImg} alt="phone" width={200}/>
        </div>
      </div>
    </section>
  );
}

export default Hero;

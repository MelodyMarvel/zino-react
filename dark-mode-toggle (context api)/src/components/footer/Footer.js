import { useContext } from "react";
import ThemeContext from "../../context/themeContext";
import "./Footer.css"
function Footer() {
  const {theme} = useContext(ThemeContext)

  return (
    <footer className="--flex-center" data-theme={theme}>
        <p>Copyright &copy; 2022.</p>
    </footer>
  );
}

export default Footer;

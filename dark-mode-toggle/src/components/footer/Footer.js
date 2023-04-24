import "./Footer.css"
function Footer({myTheme}) {

  return (
    <footer className="--flex-center" data-theme={myTheme}>
        <p>Copyright &copy; 2022.</p>
    </footer>
  );
}

export default Footer;

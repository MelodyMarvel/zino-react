import { useState } from "react";
import Login from "./Login";
import "./AuthContainer.css";
import Register from "./Register";
import Reset from "./Reset";

function AuthContainer() {
  // const [login, setLogin] = useState(true);
  // const [register, setRegister] = useState(false);
  // const [reset, setReset] = useState(false);

  // const handleRegister = () => {
  //   setLogin(false);
  //   setRegister(true);
  //   setReset(false);
  // };
  // const handleReset = () => {
  //   setLogin(false);
  //   setReset(true);
  //   setRegister(false);
  // };
  // const handleLogin = () => {
  //   setReset(false);
  //   setLogin(true);
  //   setRegister(false);
  // };

  //USESTATE WITH OBJECT
  const [auth, setAuth] = useState({
    login: true,
    register: false,
    reset: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }; 
  

  const handleRegister = () => {
    setAuth({ login: false, register: true, reset: false });
  };

  const handleReset = () => {
    setAuth({ login: false, register: false, reset: true });
  };

  const handleLogin = () => {
    setAuth({ login: true, register: false, reset: false });
  };

  return (
    <section className="--flex-center --100vh">
      <div className="container box">
        {auth.login && (
          <Login onRegister={handleRegister} onReset={handleReset} 
          onShowPassword={showPassword} onTogglePassword={handleTogglePassword}/>
        )}
        {auth.register && (<Register onLogin={handleLogin} 
        onShowPassword={showPassword} onTogglePasssword={handleTogglePassword}/>
      )}
        {auth.reset && <Reset onLogin={handleLogin} />}
      </div>
    </section>
  );
}

export default AuthContainer;

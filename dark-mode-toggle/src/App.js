import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light")
  
  const [switchBtn, setSwitchBtn] = useState(false)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    setSwitchBtn(!switchBtn)
  }

  useEffect(()=>{
    if (theme === "dark"){
      setSwitchBtn(true)
    }
  }, [theme])

  return (
      <div className='main'>
        <Header myTheme={theme} onToggleTheme={toggleTheme} onSwitch={switchBtn}/>
        <Hero myTheme={theme} />
        <Footer myTheme={theme} />
      </div>

  );
}

export default App;

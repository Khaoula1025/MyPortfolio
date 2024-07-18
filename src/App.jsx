import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import { keepTheme } from "./utils/Theme";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";
import About from "./component/About/About";
function App() {
  const [className, setClassName] = useState("theme-dark");

  useEffect(() => {
    keepTheme(setClassName);
  }, [setClassName]);
  return (
    <>
      <Header setClassName={setClassName} />
      <Home />
      <About />
      <Footer />
    </>
  );
}

export default App;

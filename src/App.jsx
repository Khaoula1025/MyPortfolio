import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import { keepTheme } from "./utils/Theme";
function App() {
  const [className, setClassName] = useState("theme-dark");

  useEffect(() => {
    keepTheme(setClassName);
  }, [setClassName]);
  return (
    <>
      <Header setClassName={setClassName} />
    </>
  );
}

export default App;

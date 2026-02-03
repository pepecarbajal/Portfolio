import { useEffect, useState } from "react";
import Hero from "./Components/Hero.jsx"
import Content from "./Components/Content.jsx"
import Footer from "./Components/Footer.jsx"

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((info) => setData(info));
  }, []);

  if (!data) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Hero info={data.header} social={data.social} />
      <Content about={data.about} projects={data.projects} skills={data.skills} name={data.header.name} />
      
      
    </>
  )
}

export default App

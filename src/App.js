import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import bgimg from "./images/wang.jpg";
function App() {
  const baseurl = "https://api.adviceslip.com/advice";
  const [id, setStateId] = useState(1);
  const [advice, setStateAdvice] = useState("");
  function getadvice() {
    axios
      .get(`${baseurl}/${id}`)
      .then((res) => {
        setStateAdvice(res.data.slip.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const generaterandom = () => {
    setStateId(Math.floor(Math.random() * 100));
  };

  useEffect(() => {
    getadvice();
  }, [id]);
  return (
    <>
    <div className="main-container" style={{
         width:'100%',
         height:'100vh',
          backgroundImage: `url(${bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition:'center center'
        }}>
      <div
        className="Main"
      >
        <p>{advice}</p>
        <button onClick={generaterandom}>Click</button>
      </div>
      </div>
    </>
  );
}

export default App;

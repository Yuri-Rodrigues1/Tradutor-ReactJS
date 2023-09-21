import React, { useState } from "react";
import "./styles.css";
import Aviso from "./components/Aviso";
const axios = require("axios").default;

export default function App() {
  const [input, setInput] = useState("");
  const [outputEn, setOutputEn] = useState("");
  const [outputEs, setOutputEs] = useState("");
  const [outputFr, setOutputFr] = useState("");
  const [outputZh, setOutputZh] = useState("");

  const translate = () => {
    const paramsEn = new URLSearchParams();
    const paramsEs = new URLSearchParams();
    const paramsFr = new URLSearchParams();
    const paramsZh = new URLSearchParams();

    paramsEn.append("q", input);
    paramsEn.append("source", "pt");
    paramsEn.append("target", "en"); // Traduzindo para inglês

    paramsEs.append("q", input);
    paramsEs.append("source", "pt");
    paramsEs.append("target", "es"); // Traduzindo para espanhol

    paramsFr.append("q", input);
    paramsFr.append("source", "pt");
    paramsFr.append("target", "fr"); // Traduzindo para francês

    paramsZh.append("q", input);
    paramsZh.append("source", "pt");
    paramsZh.append("target", "zh"); // // Traduzindo para chinês

    axios
      .post("https://libretranslate.de/translate", paramsEn, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then((res) => {
        console.log(res);
        setOutputEn(res.data.translatedText);
      });

    axios
      .post("https://libretranslate.de/translate", paramsEs, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then((res) => {
        setOutputEs(res.data.translatedText);
      });

    axios
      .post("https://libretranslate.de/translate", paramsFr, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then((res) => {
        setOutputFr(res.data.translatedText);
      });

    axios
      .post("https://libretranslate.de/translate", paramsZh, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then((res) => {
        setOutputZh(res.data.translatedText);
      });
  };

  return (
    <div className="App">
      <Aviso />
      <h1>Tradutor</h1>
      <h5>Traduza suas palavras e frases favoritas simultaneamente!</h5>

      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={translate}>Traduzir</button>

      <br />
      <br />
      <br />

      <label>inglês</label>
      <br />
      <textarea value={outputEn} readOnly />

      <br />

      <label>Espanhol</label>
      <br />
      <textarea value={outputEs} readOnly />

      <br />

      <label>Francês</label>
      <br />
      <textarea value={outputFr} readOnly />

      <br />

      <label>Chinês</label>
      <br />
      <textarea value={outputZh} readOnly />
    </div>
  );
}

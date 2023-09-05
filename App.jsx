import { useState } from "react";
import axios from "axios";
import "./App.css";
import WordHeading from "./components/wordHeading/WordHeading";
import Meaning from "./components/meaning/Meaning";
import { FiSearch } from "react-icons/fi";
import TopNav from "./components/topNav/TopNav";

function App() {
  const [inpVal, setInpVal] = useState("");
  const [wordData, setWordData] = useState([]);
  const [word, setWord] = useState("");
  const [phonetic, setPhonetic] = useState("");
  const [partOfSpeech, setPartOfSpeech] = useState([]);
  const [audio, setAudio] = useState("");
  const [source, setSource] = useState("");

  const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

  const makeRequest = async () => {
    axios
      .get(`${url}/${inpVal}`)
      .then((response) => {
        console.log(response.data);
        setWordData(response.data[0].meanings);
        setWord(response.data[0].word);
        setPhonetic(response.data[0].phonetic);
        if (response.data[0].meanings.length > 1) {
          for (let i = 0; i < response.data[0].meanings.length; i++) {
            // console.log(response.data[0].meanings[i].partOfSpeech);
            partOfSpeech.push(response.data[0].meanings[i].partOfSpeech);
          }
        }

        // Storing audio
        if (response.data[0].phonetics.length > 1) {
          for (let i = 0; i < response.data[0].phonetics.length; i++) {
            setAudio(response.data[0].phonetics[i].audio);
          }
        } else {
          setAudio(response.data[0].phonetics[0].audio);
        }
        setSource(response.data[0].sourceUrls);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest();
  };

  return (
    <div className="app">
      <TopNav />
      <main>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search word..."
            onChange={(e) => setInpVal(e.target.value)}
          />
          <FiSearch className="search-icon" />
        </form>
        {word !== "" ? (
          <WordHeading word={word} phonetic={phonetic} audio={audio} />
        ) : (
          ""
        )}
        <Meaning wordData={wordData} partOfSpeech={partOfSpeech} />
        {word !== "" ? (
          <p className="source">
            Source
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              style={{ marginLeft: "20px", color: "#333" }}
            >
              {source}
            </a>
          </p>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;

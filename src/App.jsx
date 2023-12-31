import { useState, useContext } from "react";
import axios from "axios";
import "./App.css";
import WordHeading from "./components/wordHeading/WordHeading";
import Meaning from "./components/meaning/Meaning";
import { FiSearch } from "react-icons/fi";
import TopNav from "./components/topNav/TopNav";
import ThemeContext from "./context/ThemeContext";
import { FontProvider } from "./context/FontContext";

function App() {
  const { theme } = useContext(ThemeContext);
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
        // Storing word data so we can get items from it
        setWordData(response.data[0].meanings);
        // Storing the word string by itself
        setWord(response.data[0].word);
        // Storing the phonetic string
        setPhonetic(response.data[0].phonetic);
        if (response.data[0].meanings.length > 1) {
          for (let i = 0; i < response.data[0].meanings.length; i++) {
            partOfSpeech.push(response.data[0].meanings[i].partOfSpeech);
          }
        }

        // Storing the audio of the pronunciation
        if (response.data[0].phonetics.length > 1) {
          for (let i = 0; i < response.data[0].phonetics.length; i++) {
            setAudio(response.data[0].phonetics[i].audio);
          }
        } else {
          setAudio(response.data[0].phonetics[0].audio);
        }
        // Storing the source link string
        setSource(response.data[0].sourceUrls);
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inpVal === "") {
      alert("You can't submit a blank form");
    } else {
      makeRequest();
    }
  };

  return (
    <FontProvider>
      <div className={`app ${theme === "dark" ? "dark" : ""}`}>
        <TopNav />
        <main>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search word..."
              onChange={(e) => setInpVal(e.target.value)}
            />
            <FiSearch className="search-icon" onClick={handleSubmit} />
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
              <a href={source} target="_blank" rel="noreferrer">
                {source}
              </a>
            </p>
          ) : (
            ""
          )}
        </main>
      </div>
    </FontProvider>
  );
}

export default App;

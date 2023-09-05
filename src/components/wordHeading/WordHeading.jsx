import "./WordHeading.css";

const WordHeading = ({ word, phonetic, audio }) => {
  const playAudio = () => {
    let phoneticAudio = new Audio(audio);
    phoneticAudio.play();
  };

  return (
    <div className="word-heading">
      <div className="word-heading-left">
        <h1>{word}</h1>
        <p>{phonetic}</p>
      </div>
      <div className="word-heading-right">
        <span className="play-btn" onClick={playAudio}>
          <span className="play-btn-inner"></span>
        </span>
      </div>
    </div>
  );
};

export default WordHeading;

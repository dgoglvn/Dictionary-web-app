import "./Meaning.css";

const Meaning = ({ wordData }) => {
  return (
    <>
      {wordData.map((i) => (
        <div className="meaning" key={Math.floor(Math.random() * 10000000)}>
          <p className="part-of-speech">{i.partOfSpeech}</p>
          <p style={{ color: "gray" }}>Meaning</p>
          <ul className="definitions-list">
            {i.definitions.map((definition) => (
              <li
                className="definition"
                key={Math.floor(Math.random() * 10000000)}
              >
                {definition.definition}
                {definition.example ? (
                  <p
                    style={{ color: "gray", fontStyle: "italic" }}
                  >{`"${definition.example}"`}</p>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Meaning;

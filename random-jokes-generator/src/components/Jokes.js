import { useState, useEffect } from "react";
import spinner from "../assets/spinner1.jpg";

function Jokes() {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = "https://official-joke-api.appspot.com/random_joke";
  const handleClick = () => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setJoke(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <section className="--flex-center --100vh">
      <div className="container --card --bg-light --p">
        <h2>Random Jokes Generation</h2>
        <div className="--line"></div>
        {isLoading ? (
          <div className="--center-all">
            <img src={spinner} alt="loading" width={100} />
          </div>
        ) : (
          <>
            <h4>Joke id: {joke.id}</h4>
            <p>{joke.setup}</p>
          </>
        )}

        <br />
        <button className="--btn --btn-primary" onClick={handleClick}>
          Generate Joke
        </button>
      </div>
    </section>
  );
}

export default Jokes;

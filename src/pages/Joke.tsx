import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

import { useJoke } from "../hooks/joke";

const Joke: React.FC = () => {
  const [hasClicked, setClicked] = useState(false);

  const { category } = useParams();
  const { joke, loadJoke } = useJoke();

  useEffect(() => {
    loadJoke(category);
  }, [loadJoke, category]);

  const reloadJoke = useCallback(() => {
    setClicked(true);
    loadJoke(category);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  }, [loadJoke, category]);

  return (
    <>
      <div>
        <br />
        <br />
        {joke.value}
        <br />
        <br />
        <span>Category: {joke.categories}</span>
        <br />
        <br />
        <button onClick={reloadJoke}>
          reload
        </button>
        <br />
        <br />
        <a href="/">
          <button>Home</button>
        </a>
      </div>
    </>
  );
};

export default Joke;

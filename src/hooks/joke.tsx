import React, { createContext, useContext, useCallback, useState } from "react";

import api from "../api/api";

interface AddJokeData {
  categories: string[];
  icon_url: string;
  value: string;
}

interface JokeContextData {
  joke: AddJokeData;
  loadJoke(category: string): void;
}

const JokeContext = createContext<JokeContextData>({} as JokeContextData);

const JokeProvdier: React.FC = ({ children }) => {
  const [joke, setJoke] = useState<AddJokeData>({} as AddJokeData);

  const loadJoke = useCallback(async (category) => {
    setJoke({} as AddJokeData);
    const response = await api.get<AddJokeData>(`/random?category=${category}`);
    setJoke(response.data);
  }, []);

  return (
    <JokeContext.Provider value={{ joke, loadJoke }}>
      {children}
    </JokeContext.Provider>
  );
};

function useJoke() {
  const context = useContext(JokeContext);

  if (!context) {
    throw new Error("useJoke must be used within JokeProvider");
  }

  return context;
}

export { useJoke, JokeProvdier };

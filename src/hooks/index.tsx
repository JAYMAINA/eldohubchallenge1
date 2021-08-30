import React from "react";

import { JokeProvdier } from "./joke";

const AppProvider: React.FC = ({ children }) => (
  <JokeProvdier>{children}</JokeProvdier>
);

export default AppProvider;

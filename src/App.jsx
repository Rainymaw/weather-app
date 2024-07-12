import React from "react";
import "./App.css";
import { Provider } from "./Context/Context";
import Weather from "./Components/Weather";

function App(props) {
  return (
    <div>
      <Provider>
        <Weather />
      </Provider>
    </div>
  );
}

export default App;

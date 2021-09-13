import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RoktContextProvider } from "./contexts/RoktContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <RoktContextProvider
      tagId="2939646200598515208_a5f3983416194c6bb4445262a84b76c8"
      // tagId="2939646200598515208"
      sandbox={true}
    >
      <App />
    </RoktContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

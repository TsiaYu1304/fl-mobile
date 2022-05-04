import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./reducers/store";
import { Provider } from "react-redux";

import { LiffProvider } from 'react-liff';
const liffId = process.env.REACT_APP_LINE_LIFF_ID;
const stubEnabled = process.env.NODE_ENV !== 'production';

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <LiffProvider liffId={liffId} stubEnabled={stubEnabled}>
        <App />
      </LiffProvider>
    </Provider>

  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

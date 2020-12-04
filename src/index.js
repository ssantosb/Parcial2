import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { IntlProvider } from "react-intl";
import reportWebVitals from "./reportWebVitals";
import localesEspañol from "./locales/es";
import localesEnglish from "./locales/en";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

let getLanguage = () => {
  return navigator.language || navigator.userLanguage;
}
let getLink = () => {
  const lang = navigator.language || navigator.userLanguage;
  if (lang === "en") {
    return "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json";
  } else {
    return "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/e2bc20df02828d297f99558551e37959ac97a6f8/pokemon-es.json";
  }
}

let getLocalLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  if (lang === "es") {
    return localesEspañol;
  } else {
    return localesEnglish;
  }
}

ReactDOM.render(
  <IntlProvider locale={getLanguage()} messages={getLocalLanguage()}>
    <App data={getLink()} lang={getLanguage()} />
  </IntlProvider>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();
reportWebVitals();

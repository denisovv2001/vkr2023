import React from "react";
import ReactDOM from "react-dom";
import bridge from "@vkontakte/vk-bridge"; // импортируем модуль VK Bridge
import App from "./App";

bridge.send("VKWebAppInit"); // инициализируем событие VKWebAppInit

ReactDOM.render(<App />, document.getElementById("root")); //визуализация элемента React в браузере
if (process.env.NODE_ENV === "development") {
  import("./eruda").then(({ default: eruda }) => {}); //runtime download
}

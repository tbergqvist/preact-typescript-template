import { h, render } from "preact";
import { App } from "./app";

setTimeout(() => {
  render(<App/>, document.getElementById("app"));
});
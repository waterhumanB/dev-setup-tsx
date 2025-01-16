import { createElement, Fragment, render } from "../libs/jsx-runtime";
import Header from "./components/Header";
import Counter from "./components/Counter";

const App = () => {
  return (
    <>
      <Header></Header>
      <Counter></Counter>
    </>
  );
};

const rootElement = document.getElementById("app")!;

export function reRender() {
  rootElement.innerHTML = "";

  render(<App />, rootElement);
}

reRender();

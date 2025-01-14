import { createElement, Fragment, render } from "../libs/jsx-runtime";
import Header from "./components/Header";
import Content from "./components/Content";

const App = () => {
  return (
    <>
      <Header></Header>
      <Content></Content>
    </>
  );
};

const rootElement = document.getElementById("root")!;

render(<App />, rootElement);

import { createElement, Fragment } from "../libs/jsx-runtime";
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

const element = <div className="container">Hello, React Clone!</div>;

const appElement = App();

console.log(JSON.stringify(appElement, null, 2));
console.log(element);

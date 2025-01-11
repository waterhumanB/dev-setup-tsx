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

const appElement = App();

function App2() {
  return (
    <div id="app">
      <h1>Hello, React Clone!</h1>
    </div>
  );
}

const appElement2 = App2();

export default App;

console.log(JSON.stringify(appElement2, null, 2));

console.log(JSON.stringify(appElement, null, 2));

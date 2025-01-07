function createElement(type: string, props: string, ...children: any) {
  return {
    type,
    props,
    children,
  };
}

function Fragment(props: any) {
  return props.children;
}

const App = () => {
  return (
    <>
      <div id="app">
        <h1>Hello, React Clone!</h1>
      </div>
    </>
  );
};

const element = <div className="container">Hello, React Clone!</div>;

const appElement = App();

console.log(JSON.stringify(appElement, null, 2));
console.log(element);

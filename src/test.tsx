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
      <h1 id="test">tsx test</h1>
      <p class="test">tsx test</p>
    </>
  );
};

const element = <div className="container">tsx test</div>;

const appElement = App();

console.log(JSON.stringify(appElement, null, 2));
console.log(element);

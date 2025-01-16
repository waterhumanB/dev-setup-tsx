import { createElement } from "../../libs/jsx-runtime";
import { useState } from "../hooks/useState";

function Counter() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log(count1, count2);
  return (
    <div>
      <p>현재 카운트1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>증가</button>

      <p>현재 카운트2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>증가</button>
    </div>
  );
}

export default Counter;

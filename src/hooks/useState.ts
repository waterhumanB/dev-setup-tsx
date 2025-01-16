import { reRender } from "../App";

let stateList: any[] = [];
let currentIndex = 0;

export const useState = (initialValue: any): [any, (newValue: any) => void] => {
  const index = currentIndex;
  currentIndex++;

  if (stateList[index] === undefined) {
    stateList[index] = initialValue;
  }

  function setState(newValue: any): void {
    stateList[index] = newValue;

    reRender();

    currentIndex = 0;
  }

  return [stateList[index], setState];
};

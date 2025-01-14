import { reRender } from "../App";

let state: any = null;

export const useState = (initialValue: any): [any, (newValue: any) => void] => {
  if (state === null) {
    state = initialValue;
  }

  function setState(newValue: any): void {
    state = newValue;

    reRender();
  }

  return [state, setState];
};

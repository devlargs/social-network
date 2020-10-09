import { DynamicObject } from "interfaces/DynamicObject";

const removeFalsy = (obj: DynamicObject) => {
  let temp = { ...obj };
  for (let propName in temp) {
    if (
      temp[propName] === null ||
      temp[propName] === undefined ||
      temp[propName] === ""
    ) {
      delete temp[propName];
    }
  }
  return temp;
};

export default removeFalsy;

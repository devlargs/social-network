import { DynamicObject } from "interfaces/DynamicObject";

const get = (obj: DynamicObject, path: string, defaultValue = undefined) => {
  const travel = (regexp: any) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res: any, key: any) =>
          res !== null && res !== undefined ? res[key] : res,
        obj
      );
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === undefined || result === obj ? defaultValue : result;
};

export default get;

import { DUIProps } from "../../types/DUIProps";
import { stringCompare } from "./stringCompare";

export function isPropsSame<T extends DUIProps>(a: T, b: T): boolean {
  if (a === b) {
    return true;
  }

  const aArray = Object.entries(a).sort(([a], [b]) => stringCompare(a, b));
  const bArray = Object.entries(a).sort(([a], [b]) => stringCompare(a, b));
  if (aArray.length !== bArray.length) {
    return false;
  }

  for (const i in aArray) {
    if (aArray[i] != bArray[i]) {
      return false;
    }
  }

  return true;
}

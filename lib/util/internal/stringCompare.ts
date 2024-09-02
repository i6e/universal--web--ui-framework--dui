import { CompareResult } from "@icehouse/universal--util--typescript--types";

export function stringCompare(a: string, b: string): CompareResult {
  return a > b ? 1 : a === b ? 0 : -1;
}

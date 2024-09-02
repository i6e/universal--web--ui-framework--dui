import { DUIElement } from "./DUIElement";

export type DUINode =
  | DUIElement
  | false
  | null
  | undefined
  | string
  | DUINode[];

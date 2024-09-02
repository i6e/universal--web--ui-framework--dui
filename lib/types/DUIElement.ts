import type { h } from "../util/h";
import { DUIProps } from "./DUIProps";

export interface DUIElement {
  componentType: Function | keyof h.JSX.IntrinsicElements;
  props: DUIProps;
}

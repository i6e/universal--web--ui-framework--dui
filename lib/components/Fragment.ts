import { DUIElement } from "../types/DUIElement";
import { DUINode } from "../types/DUINode";
import { DUIProps } from "../types/DUIProps";
import { h } from "../util/h";

export interface DUIFragmentProps extends DUIProps {
  children?: DUINode[];
}

export function Fragment(props: DUIFragmentProps): DUIElement {
  return h("fragment", props, props.children);
}

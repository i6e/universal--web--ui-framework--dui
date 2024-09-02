import { DUIFragmentProps } from "../components/Fragment";
import { DUIDivProps } from "../intrinsic/DUIDivProps";
import { DUIComponent } from "../types/DUIComponent";
import { DUIElement } from "../types/DUIElement";
import { DUINode } from "../types/DUINode";
import { DUIProps } from "../types/DUIProps";

export function h<T extends DUIProps>(
  componentType: DUIComponent<T>,
  props: T,
  ...children: DUINode[]
): DUIElement;
export function h<T extends keyof h.JSX.IntrinsicElements>(
  componentType: T,
  props: h.JSX.IntrinsicElements[T],
  ...children: DUINode[]
): DUIElement;
export function h<T extends DUIProps>(
  componentType: DUIComponent<T> | keyof h.JSX.IntrinsicElements,
  props: T,
  ...children: DUINode[]
): DUIElement {
  return { componentType, props: children ? { ...props, children } : props };
}

export namespace h.JSX {
  export interface Element extends DUIElement {}

  export interface IntrinsicElements {
    fragment: DUIFragmentProps;
    div: DUIDivProps;
  }

  export interface ElementChildrenAttribute {
    children: {};
  }
}

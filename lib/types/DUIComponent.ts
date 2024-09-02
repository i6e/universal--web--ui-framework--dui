import { DUINode } from "./DUINode";

export type DUIComponent<T> = (props: T) => DUINode;

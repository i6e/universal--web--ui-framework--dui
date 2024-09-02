import { DUIFragmentProps } from "./components/Fragment";
import { DUIDivProps } from "./intrinsic/DUIDivProps";
import { DUINode } from "./types/DUINode";

function divRenderer(props: DUIDivProps): string {
  return `<div>${renderToString(props.children)}</div>`;
}

function fragmentRenderer(props: DUIFragmentProps): string {
  return renderToString(props.children);
}

const intrinsicRenderers: Record<string, (props: any) => DUINode | null> = {
  fragment: fragmentRenderer,
  div: divRenderer,
};

export function renderToString(node: DUINode): string {
  if (!node) {
    return "";
  } else if (typeof node === "string") {
    return node;
  } else if (Array.isArray(node)) {
    return node.map((node) => renderToString(node)).join("");
  } else if (typeof node.componentType === "string") {
    return renderToString(intrinsicRenderers[node.componentType](node.props));
  } else {
    return renderToString(node.componentType(node.props));
  }
}

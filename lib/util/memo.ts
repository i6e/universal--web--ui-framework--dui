import { DUIComponent } from "../types/DUIComponent";
import { DUINode } from "../types/DUINode";
import { DUIProps } from "../types/DUIProps";
import { isPropsSame as isPropsEqual } from "./internal/isPropsEqual";

export function memo<T extends DUIProps>(
  component: DUIComponent<T>
): DUIComponent<T> {
  let memo: [T, DUINode] | undefined;

  return function MemoComponent(props) {
    if (!memo) {
      const result = component(props);
      memo = [props, result];
      return result;
    } else {
      const [previousProps, previousResult] = memo;
      if (isPropsEqual(previousProps, props)) {
        return previousResult;
      }
      const result = component(props);
      memo = [props, result];
      return result;
    }
  };
}

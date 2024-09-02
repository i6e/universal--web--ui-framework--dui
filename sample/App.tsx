import { h } from "@icehouse/universal--web--ui-framework--dui";
import { DUIElement } from "../lib/types/DUIElement";

export interface AppProps {
  name: string;
}

export function App({ name }: AppProps): DUIElement {
  return <div class="greetings">Hello {name}!</div>;
}

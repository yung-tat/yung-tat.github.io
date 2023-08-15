export type StackStyles = "green" | "yellow" | "red" | "ultra-instinct";

export interface IStack {
  name: string;
  items: IStackItem[];
}

export interface IStackItem {
  name: string;
  color: StackStyles;
}

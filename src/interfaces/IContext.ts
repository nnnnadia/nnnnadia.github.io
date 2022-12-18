export default interface IStacksContext {
  stacksSelected: number[];
  setStacksSelected(stacks: number[]): void;
  mode: 'light' | 'dark';
  setMode(mode: 'light' | 'dark'): void;
}
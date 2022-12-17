import stacks from '../data/stacks.json';
import IStack from '../interfaces/IStack';

export default class stackService {
  static getAll = (): IStack[] => stacks;

  static getEveryStackName = (): string[] => {
    const stacksNames = stacks.map((stack) => stack.name);
    return stacksNames;
  }
  static getEveryStackId = (): number[] => {
    const stacksIds = stacks.map((stack) => stack.id);
    return stacksIds;
  }
}

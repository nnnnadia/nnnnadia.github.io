import stacks from '../data/stacks.json';

export default class stackService {
  static getAll = () => {
    const stacksNames = stacks.map((stack) => stack.name);
    return stacksNames;
  }
}

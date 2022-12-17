import stacks from '../data/stacks.json';
import IStack from '../interfaces/IStack';

export default class stackService {
  static getAll = (): IStack[] => {
    return stacks;
  }
}

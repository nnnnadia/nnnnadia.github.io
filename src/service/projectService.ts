import projects from '../data/projects.json';

export default class projectService {
  static getAll = () => {
    return projects;
  };
}

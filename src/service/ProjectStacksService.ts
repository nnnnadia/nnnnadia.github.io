import projectStacks from '../data/projectStacks.json';

export default class ProjectStacksService {
  static getProjectStacks = (projectId: number): number[] => {
    const stacksFromProject = projectStacks
      .filter((projectStacks) => projectStacks.projectId === projectId)
      .map((projectStacks) => projectStacks.stackId);
    return stacksFromProject;
  };
}

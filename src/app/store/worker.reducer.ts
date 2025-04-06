import { createReducer, on } from '@ngrx/store';
import { addProject, removeProject }  from './worker.action'
import { Project } from './worker.model';

// Initial state with project list
export interface ProjectState {
  /** Please declare this */
  projects: Project[];
}

export const initialState: ProjectState = {
  projects: [
    { name: 'Vue.js', type: 'Frontend Framework', image: 'image1', description: 'working with this last 4 years' },
    { name: 'React.js', type: 'Frontend Framework', image: 'image2', description: 'working with this last 3 years' },
    { name: 'Angular', type: 'Frontend Framework', image: 'image3', description: 'working with this last 2 years' },
    { name: 'Svelte', type: 'Frontend Framework', image: 'image1', description: 'working with this last 1 years' },
    { name: 'Three.js', type: '3D Project', image: 'image2', description: 'working with this last 1 years' },
  ]
};

export /** declear variable with details */
const projectReducer = createReducer(
  initialState,
  on(addProject, (state, { project }) => ({
    ...state,
    projects: [...state.projects, project]
  })),
  on(removeProject, (state, { projectName }) => ({
    ...state,
    projects: state.projects.filter(p => p.name !== projectName)
  }))
);

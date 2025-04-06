import { createAction, props } from '@ngrx/store';
import { Project } from './worker.model'; 

// Action to add a project
export /** declear variable with details */
const addProject = createAction(
  '[Project] Add Project',
  props<{ project: Project }>()
);

// Action to remove a project by name
export /** declear variable with details */
const removeProject = createAction(
  '[Project] Remove Project',
  props<{ projectName: string }>()
);

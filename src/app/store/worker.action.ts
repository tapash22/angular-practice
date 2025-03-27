import { createAction, props } from '@ngrx/store';
import { Project } from './worker.model'; 

// Action to add a project
export const addProject = createAction(
  '[Project] Add Project',
  props<{ project: Project }>()
);

// Action to remove a project by name
export const removeProject = createAction(
  '[Project] Remove Project',
  props<{ projectName: string }>()
);

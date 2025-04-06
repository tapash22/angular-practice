import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProjectState } from './worker.reducer'; 

// Feature Selector
export /** declear variable with details */
const selectProjectState = createFeatureSelector<ProjectState>('projectState');

// Selector to get all projects
export /** declear variable with details */
const selectAllProjects = createSelector(
  selectProjectState,
  (state) => state.projects
);

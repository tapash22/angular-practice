import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProjectState } from './worker.reducer'; 

// Feature Selector
export const selectProjectState = createFeatureSelector<ProjectState>('projectState');

// Selector to get all projects
export const selectAllProjects = createSelector(
  selectProjectState,
  (state) => state.projects
);

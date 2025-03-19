import { animate } from '@angular/animations';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    data: {
      animate: 'home',
    },
  },
  {
    path: 'build',
    loadComponent: () =>
      import('./build/build.component').then((m) => m.BuildComponent),
    data: {
      animate: 'build',
    },
  },
  {
    path: 'working',
    loadComponent: () =>
      import('./working/working.component').then((m) => m.WorkingComponent),
    data: {
      animate: 'working',
    },
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
    data: {
      animate: 'portfolio',
    },
  },
  {
    path: 'working',
    loadComponent: () =>
      import('./working/working.component').then((m) => m.WorkingComponent),
    data: {
      animate: 'working',
    },
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./resume/resume.component').then((m) => m.ResumeComponent),
    data: {
      animate: 'resume',
    },
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pricing/pricing.component').then((m) => m.PricingComponent),
    data: {
      animate: 'pricing',
    },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
    data: {
      animate: 'contact',
    },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

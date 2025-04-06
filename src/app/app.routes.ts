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
      index:0
    },
  },
  {
    path: 'build',
    loadComponent: () =>
      import('./build/build.component').then((m) => m.BuildComponent),
    data: {
      animate: 'build',
      index:1
    },
  },
  {
    path: 'working',
    loadComponent: () =>
      import('./working/working.component').then((m) => m.WorkingComponent),
    data: {
      animate: 'working',
      index:2
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
      index:3
    },
  },
  {
    path: 'working',
    loadComponent: () =>
      import('./working/working.component').then((m) => m.WorkingComponent),
    data: {
      animate: 'working',
      index:4
    },
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./resume/resume.component').then((m) => m.ResumeComponent),
    data: {
      animate: 'resume',
      index:5
    },
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pricing/pricing.component').then((m) => m.PricingComponent),
    data: {
      animate: 'pricing',
      index:6
    },
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
    data: {
      animate: 'contact',
      index:7
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

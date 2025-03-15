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
  },
  {
    path: 'build',
    loadComponent: () =>
      import('./build/build.component').then((m) => m.BuildComponent),
  },
  {
    path: 'working',
    loadComponent: () =>
      import('./working/working.component').then((m) => m.WorkingComponent),
  },
  {
    path: 'portfolio',
    loadComponent: () =>
      import('./portfolio/portfolio.component').then(
        (m) => m.PortfolioComponent
      ),
  },
  {
    path: 'working',
    loadComponent: () =>
      import('./working/working.component').then((m) => m.WorkingComponent),
  },
  {
    path: 'resume',
    loadComponent: () =>
      import('./resume/resume.component').then((m) => m.ResumeComponent),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pricing/pricing.component').then((m) => m.PricingComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((m) => m.ContactComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];

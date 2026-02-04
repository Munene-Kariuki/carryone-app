import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const coreRoutes: Routes = [
  {
    path: '',
    component: Layout,
        children: [
      {
        path: '',
        loadComponent: () =>
          import('../features/home/home').then(m => m.Home),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('../features/about/about').then(m => m.About),
      },
      {
        path: 'services',
        loadComponent: () =>
          import('../features/services/services').then(m => m.Services),
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('../features/projects/projects').then(m => m.Projects),
      },
      {
        path: 'equipment',
        loadComponent: () =>
          import('../features/equipment/equipment').then(m => m.Equipment),
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('../features/gallery/gallery').then(m => m.Gallery),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('../features/contact/contact').then(m => m.Contact),
      },
    ],
  },
];

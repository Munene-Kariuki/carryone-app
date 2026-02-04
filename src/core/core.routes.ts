import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const coreRoutes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
    //   {
    //     path: '',
    //     loadChildren: () =>
    //       import('../features/dashboard/dashboard.routes')
    //         .then(m => m.dashboardRoutes),
    //   },
    //   {
    //     path: 'projects',
    //     loadChildren: () =>
    //       import('../features/projects/projects.routes')
    //         .then(m => m.projectsRoutes),
    //   },
    ],
  },
];

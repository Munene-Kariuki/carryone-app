// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

import { bootstrapApplication } from "@angular/platform-browser";
import { App } from "./app/app";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app/app.routes";

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));


bootstrapApplication(App, {
  providers: [
    provideRouter(appRoutes),
  ],
});

import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';

import { importProvidersFrom } from '@angular/core';



bootstrapApplication(AppComponent,  {
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routes), importProvidersFrom(),
  ]
   }
  ).catch((err) => console.error(err));

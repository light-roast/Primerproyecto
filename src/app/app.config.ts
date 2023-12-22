import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { InterceptService } from './services/intercept.service';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true}]
};

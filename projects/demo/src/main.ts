import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/modules/app/app.config';
import { App } from './app/modules/app/components/app-component/app-component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

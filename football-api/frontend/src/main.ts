import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...appConfig.providers!,
    provideHttpClient(), // 👈 asegurate de tenerlo aquí
  ],
});

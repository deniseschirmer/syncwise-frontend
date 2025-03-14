import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Certifique-se de que está importando as rotas corretamente

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withComponentInputBinding())]
}).catch(err => console.error(err));

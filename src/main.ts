import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter} from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', loadComponent: () => import('./app/home/home.component').then(m => m.HomeComponent) }, // default loading home component, not app
      { path: 'about', loadComponent: () => import('./app/about/about.component').then(m => m.AboutComponent) },
      { path: 'products', loadComponent: () => import('./app/products/products.component').then(m => m.ProductsComponent) },
      { path: 'contact', loadComponent: () => import('./app/contact/contact.component').then(m => m.ContactComponent) },
    ]),
  ],
});
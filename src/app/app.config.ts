import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient and withFetch
import { TranslateLoader, TranslateModule } from '@ngx-translate/core'; // Import TranslateModule and TranslateLoader
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; // Import TranslateHttpLoader

import { routes } from './app.routes';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json'); // Path to your translation files
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()), 
    importProvidersFrom( 
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        },
        defaultLanguage: 'de' 
      })
    )
  ]
};
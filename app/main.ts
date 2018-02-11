import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import {KeycloakService} from './keycloak/keycloak.service';
KeycloakService.init()
   .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
   .catch(e => window.location.reload());
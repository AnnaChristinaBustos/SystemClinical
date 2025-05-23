import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { provideAnimations } from "@angular/platform-browser/animations";

import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
    providers:[
        provideHttpClient(),
        provideRouter(routes),
        provideAnimations()
    ]
}
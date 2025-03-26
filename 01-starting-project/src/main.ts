// Executed when website is loaded.

// Looks for components in the HTML file and replaces the tag with the markup you define for the custom component.
import { bootstrapApplication } from '@angular/platform-browser';

// Being passed to bootstrapApplication.
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((err) => console.error(err));

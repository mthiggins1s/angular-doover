import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./song-list/user.component";

@Component({ // adds metadata to the attached class (AppComponent).
  selector: 'app-root', // tells Angular what elements in the HTML code it should replace with markup.
  standalone: true,
  imports: [HeaderComponent, UserComponent],
  templateUrl: './app.component.html', // stores the markup of the component.
  styleUrl: './app.component.css', // stores the styles of the component.
})
export class AppComponent { // class with the name AppComponent; it creates a custom HTML element in ties with the @Component decorator above.

}

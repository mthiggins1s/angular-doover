import { Component } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';

// this should give you a random number between zero and the highest available index in the array
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent { // we start with a property 'selectedUser', and import the DUMMY_USERS array. We can now ACCESS the selectedUser property in the user template.
  selectedUser = DUMMY_USERS[randomIndex];
}

import { Component } from '@angular/core';

import { SONG_LIST } from '../songs-list';

// this should give you a random number between zero and the highest available index in the array
const randomIndex = Math.floor(Math.random() * SONG_LIST.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent { // we start with a property 'selectedUser', and import the DUMMY_USERS array. We can now ACCESS the selectedUser property in the user template.
  selectedUser = SONG_LIST[randomIndex];


  // a getter; method that useable like a property.
  get imagePath() {
    return 'assets/songs/' + this.selectedUser.avatar
  }
}

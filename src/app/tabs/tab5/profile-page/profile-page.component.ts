import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  profilePictureUrl = 'https://via.placeholder.com/150';
  username = 'JohnDoe123';
  firstName = 'John';
  lastName = 'Doe';
  editMode = false;

  prevFirstName: string = "";
  prevLastName: string = "";

  toggleEditMode(event?: MouseEvent) {
    if (event) {
      event.stopPropagation();
    }
    if (!this.editMode) {
      this.prevFirstName = this.firstName;
      this.prevLastName = this.lastName;
    }
    this.editMode = !this.editMode;
  }

  cancelChanges() {
    if (this.editMode) {
      this.firstName = this.prevFirstName;
      this.lastName = this.prevLastName;
      this.editMode = false;
    }
  }

  saveChanges() {
    if (this.firstName.trim() !== '') {
      this.editMode = false;
    } else {
      alert('First name is required');
    }
  }
}

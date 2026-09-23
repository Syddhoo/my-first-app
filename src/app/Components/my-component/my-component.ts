import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-my-component', 
  styleUrl: './my-component.css',
  templateUrl: './my-component.html',
})
export class MyComponent {
showMessage() {
  alert('Button Clicked');
}
  appName = "Interpolation in Angular";
  //imageUrl = "https://angular.io/assets/images/logos/angular/angular.svg";
  imageUrl = "/channels4_profile.jpg";

  userName = "";
}

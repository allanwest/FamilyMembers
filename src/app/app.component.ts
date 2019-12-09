import { Component } from '@angular/core';
import { Family } from './models/family';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'family-members';
  family: Family;
  constructor() {
    this.family = new Family();
    this.family.adults = 3;
    this.family.children = 8;
  }
}

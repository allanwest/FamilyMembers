import { Component } from '@angular/core';
import { Family } from './family-members/models/family';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'family-members';
  family1: Family;
  family2: Family;
  family3: Family;
  constructor() {
    this.family1 = new Family();
    this.family1.adults = 3;
    this.family1.children = 8;

    this.family2 = new Family();
    this.family2.adults = 25;
    this.family2.children = 4;

    this.family3 = new Family();
    this.family3.adults = 6;
    this.family3.children = 50;
  }
}

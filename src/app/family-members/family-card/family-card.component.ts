import { Component, OnInit, Input } from '@angular/core';
import { Family } from '../models/family';

@Component({
  selector: 'app-family-card',
  templateUrl: './family-card.component.html',
  styleUrls: ['./family-card.component.css']
})
export class FamilyCardComponent implements OnInit {
  @Input() family: Family;
  constructor() { }

  ngOnInit() {
  }

}

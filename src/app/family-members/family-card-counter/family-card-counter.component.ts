import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-family-card-counter',
  templateUrl: './family-card-counter.component.html',
  styleUrls: ['./family-card-counter.component.css']
})
export class FamilyCardCounterComponent implements OnInit {
  @Input() count: number;
  constructor() { }

  ngOnInit() {
  }

}

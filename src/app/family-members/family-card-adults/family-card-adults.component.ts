import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-family-card-adults',
  templateUrl: './family-card-adults.component.html',
  styleUrls: ['./family-card-adults.component.css']
})
export class FamilyCardAdultsComponent implements OnInit {
  @Input() adults: any;
  constructor() { }

  ngOnInit() {
    this.adults = [...Array(this.adults).keys()]
  }

}

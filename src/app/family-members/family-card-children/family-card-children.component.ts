import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-family-card-children',
  templateUrl: './family-card-children.component.html',
  styleUrls: ['./family-card-children.component.css']
})
export class FamilyCardChildrenComponent implements OnInit {
  @Input() children: any;
  constructor() { }

  ngOnInit() {
    this.children = [...Array(this.children).keys()]
  }

}

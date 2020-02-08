import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() courses;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {

  @Input() repoItem;

  constructor() { }

  ngOnInit() {

  }

}

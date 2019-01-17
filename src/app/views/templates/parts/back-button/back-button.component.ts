import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-back-button',
  template: ` <button (click)='backClicked()' class=" btn btn-secondary">Back</button>`,
  styleUrls: ['./back-button.component.css']
})
export class BackButtonComponent {

  constructor(private _location: Location) { }

  backClicked() {
    this._location.back();
  }

}

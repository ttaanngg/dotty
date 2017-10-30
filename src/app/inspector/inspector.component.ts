import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent {

  selected: any;
  @Output() drill = new EventEmitter();

  constructor() {
  }


  flush() {
    this.selected = null;
  }

}

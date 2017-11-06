import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent {

  selected: any;

  constructor() {
  }

  flush() {
    this.selected = null;
  }

  isNodeType() {
    return !(this.selected.target);
  }

  isLinkType() {
    return !this.isNodeType();
  }
}

import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {LinkTypeComponent} from "./link-type/link-type.component";
import {NodeTypeComponent} from "./node-type/node-type.component";

@Component({
  selector: 'app-inspector',
  templateUrl: './inspector.component.html',
  styleUrls: ['./inspector.component.scss']
})
export class InspectorComponent {

  selected: any;
  @ViewChild(NodeTypeComponent) nodeInspector;
  @ViewChild(LinkTypeComponent) linkInspector;
  @Output() drill = new EventEmitter();

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

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NodeType} from "../../configs";

@Component({
  selector: 'app-node-type',
  templateUrl: './node-type.component.html',
  styleUrls: ['./node-type.component.scss']
})
export class NodeTypeComponent implements OnInit {

  constructor() {
  }

  @Input() node: NodeType;
  @Output() drill = new EventEmitter();


  entries(): string[][] {
    return Object.keys(this.node.attrs)
      .map((k) => [k, this.node.attrs[k]]);
  }


  ngOnInit() {
  }

}

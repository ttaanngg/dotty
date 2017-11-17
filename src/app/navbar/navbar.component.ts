import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NodeType} from "../configs";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  configs: NodeType[] = [];
  @Input() title;
  @Output() updateEvent = new EventEmitter();

  constructor() {

  }

  lastConfig(): any {
    return this.configs[this.configs.length - 1];
  }

  init(top: NodeType) {
    this.configs.push(top);
    this.setup(0);
  }

  private append(node: NodeType) {
    this.configs.push(node);
  }

  forward(node: NodeType) {
    this.append(node);
  }

  private setup(i: number) {
    this.configs = this.configs.slice(0, i + 1);
    this.updateEvent.emit(this.lastConfig());
  }

  update(i: number) {
    if (i === this.configs.length - 1) return;
    this.setup(i);
  }
}

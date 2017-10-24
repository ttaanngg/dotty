import {Component} from '@angular/core';
import {PlaygroundComponent} from "../playground/playground.component";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  breadcrumbs: string[] = [];
  configs: any[] = [];
  playground: PlaygroundComponent;

  constructor() {

  }

  init(playground: PlaygroundComponent, initialConfig: any) {
    this.playground = playground;
    this.breadcrumbs.push('TOP');
    this.configs.push(initialConfig);
    this.invokePlayground();
  }

  private append(tag: any) {
    this.breadcrumbs.push(tag.id);
    this.configs.push(tag.children);
  }

  forward(tag: any) {
    this.append(tag);
    this.invokePlayground();
  }

  invokePlayground() {
    this.playground.clear();
    let lastOffset = this.configs.length - 1;
    this.playground.nodes = this.configs[lastOffset].nodes;
    this.playground.links = this.configs[lastOffset].links == null ? [] : this.configs[lastOffset].links;
    this.playground.draw();
  }

  back(i: number) {
    if (i === this.breadcrumbs.length - 1) return;
    this.configs = this.configs.slice(0, i + 1);
    this.breadcrumbs = this.breadcrumbs.slice(0, i + 1);
    this.invokePlayground();
  }
}

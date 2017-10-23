import {Component, OnInit} from '@angular/core';
import {originalData} from "../configs";
import {PlaygroundComponent} from "../playground/playground.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  breadcrumbs: string[] = [];
  configs: any[] = [];
  playground: PlaygroundComponent;
  
  constructor() {
  
  }
  
  init(playground: PlaygroundComponent, initialConfig: any) {
    let self = this;
    this.playground = playground;
    this.playground.notify = (tag: any) => {
      console.debug(tag);
      self.breadcrumbs.push(tag.id);
      self.configs.push(tag.children);
      self.draw();
    };
    
    this.breadcrumbs.push('TOP');
    this.configs.push(initialConfig);
    this.draw();
  }
  
  
  draw() {
    console.debug(this.configs);
    this.playground.clear();
    let lastOffset = this.configs.length - 1;
    this.playground.nodes = this.configs[lastOffset].nodes;
    this.playground.links = this.configs[lastOffset].links==null?[]:this.configs[lastOffset].links;
    this.playground.draw();
  }
  
  back(i: number) {
    if (i === this.breadcrumbs.length - 1) return;
    console.debug(this.configs);
    console.debug(this.breadcrumbs);
    this.configs = this.configs.slice(0, i + 1);
    this.breadcrumbs = this.breadcrumbs.slice(0, i + 1);
    this.draw();
  }
  
  append(tag: string) {
    this.breadcrumbs.push(tag);
  }
  
  ngOnInit() {
  }
  
}

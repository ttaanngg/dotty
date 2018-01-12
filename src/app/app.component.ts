import {Component, Input, isDevMode, OnInit, ViewChild} from '@angular/core';
import {PlaygroundComponent} from './playground/playground.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {NodeType, translate} from "./configs";
import {RawConfig} from "./raw.config";
import * as $ from 'jquery';
import * as JSON5 from 'json5';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '定制版';
  @ViewChild(NavbarComponent) nav: NavbarComponent;
  @ViewChild(PlaygroundComponent) playground: PlaygroundComponent;
  @ViewChild("labels") labels;
  @ViewChild("matrix") matrix;

  ngOnInit() {

  }

  generate() {
    let labels = $('#labels').val().toString();
    console.log(labels);
    let matrix = $('#matrix').val().toString();
    console.log(matrix);

    let rawConfig = new RawConfig();
    rawConfig.labels = eval(JSON5.parse(labels));
    console.debug(rawConfig.labels);
    rawConfig.matrix = eval(JSON5.parse(matrix));
    console.debug(rawConfig.matrix);
    console.debug(rawConfig);
    let data = translate(rawConfig);
    console.debug(data);
    this.nav.init(data);
  }

  constructor(private http: Http) {
  }

  select(unit: any) {
    console.debug(unit);
  }

  drill(node: NodeType) {
    this.nav.forward(node);
    this.playground.setTopo(this.nav.lastConfig());
  }

  back(node: NodeType) {
    this.playground.setTopo(node);
  }

  treeFlat(data: any): any {
    let self = this;
    return {
      'name': data.label,
      'children': data.children ?
        data.children.nodes.map((child) => self.treeFlat(child)) : null
    };
  }
}

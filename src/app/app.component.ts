import {Component, isDevMode, OnInit, ViewChild} from '@angular/core';
import {PlaygroundComponent} from './playground/playground.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {NodeType, translate} from "./configs";
import {TreeComponent} from "./tree/tree.component";
import {InspectorComponent} from "./inspector/inspector.component";
import {rawConfig} from "./raw.config";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = '配置可视化';
  @ViewChild(NavbarComponent) nav: NavbarComponent;
  @ViewChild(PlaygroundComponent) playground: PlaygroundComponent;
  @ViewChild(TreeComponent) tree: TreeComponent;
  @ViewChild(InspectorComponent) inspector: InspectorComponent;

  ngOnInit() {
    if (isDevMode()) {
      this.nav.init(translate(rawConfig));
    } else {
      let location = window.location;
      let topoID = location.pathname.split('/').pop();
      let retrievePath = `//${location.host}/retrieve/${topoID}`;
      this.http.get(retrievePath)
        .subscribe((data) => {
          this.nav.init(translate(data.json()));
        }, (err) => {
          alert(`Can not retrieve topo json ${err}`);
        });
    }
  }


  constructor(private http: Http) {
  }

  select(unit: any) {
    console.debug(unit);
    this.inspector.selected = unit;
    if (!unit.source) {
      this.tree.init(this.treeFlat(unit));
    }
  }

  drill(node: NodeType) {
    this.inspector.flush();
    this.nav.forward(node);
    this.playground.setTopo(this.nav.lastConfig());
  }

  back(node: NodeType) {
    this.inspector.flush();
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

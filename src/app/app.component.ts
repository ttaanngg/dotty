import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PlaygroundComponent} from './playground/playground.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {connectData, translate} from "./configs";
import {TreeComponent} from "./tree/tree.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = '配置可视化';
  @ViewChild(NavbarComponent) nav: NavbarComponent;
  @ViewChild(PlaygroundComponent) playground: PlaygroundComponent;
  @ViewChild(TreeComponent) tree: TreeComponent;

  ngOnInit() {
    this.nav.init(this.playground, connectData);
  }

  ngAfterViewInit(): void {
  }


  constructor(private http: Http) {
  }

  treeFlat(data: any): any {
    let self = this;
    return {
      'name': data.label,
      'children': data.children ?
        data.children.nodes.map((child) => self.treeFlat(child)) : null
    };
  }


  plotTree(data) {
    this.tree.init(this.treeFlat(data));
  }
}

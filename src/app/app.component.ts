import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {PlaygroundComponent} from './playground/playground.component';
import {NavbarComponent} from "./navbar/navbar.component";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {connectData, translate} from "./configs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = '配置可视化';
  @ViewChild(NavbarComponent) nav: NavbarComponent;
  @ViewChild(PlaygroundComponent) playground: PlaygroundComponent;

  ngOnInit() {
    this.nav.init(this.playground, connectData);
  }

  ngAfterViewInit(): void {
  }


  constructor(private http: Http) {
  }

}

import {Component, isDevMode, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {routesSet} from "../routes";

@Component({
  selector: 'app-tracer',
  templateUrl: './tracer.component.html',
  styleUrls: ['./tracer.component.scss']
})
export class TracerComponent implements OnInit {
  routesSet: any[];
  mapper: {};

  constructor(private http: Http) {
  }

  init(data) {
    this.routesSet = data;
    this.mapper = new Map<String, String>();
    for (let i in this.routesSet) {
      for (let j in this.routesSet[i]) {
        let item = this.routesSet[i][j];
        this.mapper[i + '_' + j] = item.device_id_a + '<--->' + item.device_id_b
      }
    }
  }

  ngOnInit() {
    if (isDevMode()) {
      this.init(routesSet);
    } else {
      let location = window.location;
      let topoID = location.pathname.split('/').pop();
      let retrievePath = `//${location.host}/routes/${topoID}`;
      this.http.get(retrievePath)
        .subscribe((data) => {
          this.init(data.json());
        }, (err) => {
          alert(`Can not retrieve routes json ${err}`);
        });
    }
  }
}

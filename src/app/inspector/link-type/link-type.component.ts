import {Component, Input, OnInit} from '@angular/core';
import {LinkType} from "../../configs";

@Component({
  selector: 'app-link-type',
  templateUrl: './link-type.component.html',
  styleUrls: ['./link-type.component.scss']
})
export class LinkTypeComponent implements OnInit {

  constructor() {
  }

  entries(): string[][] {
    return Object.keys(this.link.attrs)
      .map((k) => [k, this.link.attrs[k]])
      .filter((k) => k[0] !== 'selected')
      .filter((k) => k[0] !== 'device_id_a')
      .filter((k) => k[0] !== 'device_id_b');
  }


  @Input() link: LinkType;

  ngOnInit() {
  }

}

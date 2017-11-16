import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as $ from 'jquery';

const HEIGHT = 400;
const DURATION = 1000;
const MARGIN = {top: 5, right: 100, bottom: 5, left: 90};

@Component({
  selector: 'app-tracer',
  templateUrl: './tracer.component.html',
  styleUrls: ['./tracer.component.scss']
})
export class TracerComponent implements OnInit, AfterViewInit {
  svg: any;
  width: number;
  height: number;

  private initFrame() {
    if (this.svg) {
      this.svg.remove();
      this.svg = null;
    }
    this.width = $('#tracer-wrapper').width() - MARGIN.left - MARGIN.right;
    this.height = HEIGHT - MARGIN.top - MARGIN.bottom;
    let self = this;
    self.svg = d3.select('#tracer')
      .attr('width', self.width + MARGIN.left + MARGIN.right)
      .attr('height', self.height + MARGIN.top + MARGIN.bottom)
      .append('g')
      .attr('transform', `translate(${MARGIN.left}, ${MARGIN.right})`);
  }

  ngAfterViewInit() {
    this.initFrame();
  }

  constructor() {
  }

  ngOnInit() {

  }


}

import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as $ from 'jquery';

const HEIGHT = 255;
const DURATION = 1000;
const TEST_DATA = {
  "name": "Top Level",
  "children": [
    {
      "name": "Level 2: A",
      "children": [
        {"name": "Son of A"},
        {"name": "Daughter of A"}
      ]
    },
    {"name": "Level 2: B"}
  ]
};
const MARGIN = {top: 20, right: 90, bottom: 30, left: 90};

function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

function diagonal(s, d): string {
  return `M ${s.y} ${s.x}
                C ${(s.y + d.y) / 2} ${s.x},
                  ${(s.y + d.y) / 2} ${d.x},
                  ${d.y} ${d.x}`;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit, AfterViewInit {
  svg: any;
  width: number;
  height: number;
  treeMap: any;
  root: any;
  i = 0;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let self = this;
    self.width = $('#standard-width').width() - MARGIN.left - MARGIN.right;
    self.height = HEIGHT - MARGIN.bottom - MARGIN.top;
    self.svg =
      d3.select('#app-tree-svg')
        .attr('width', self.width + MARGIN.left + MARGIN.right)
        .attr('height', self.height + MARGIN.top + MARGIN.bottom)
        .append('g')
        .attr('transform', `translate(${MARGIN.left}, ${MARGIN.top})`);

    self.treeMap = d3.tree().size([HEIGHT, this.width]);
    self.root = d3.hierarchy(TEST_DATA, (d: any) => d.children);
    self.root.x0 = HEIGHT / 2;
    self.root.y0 = 0;
    self.root.children.forEach(collapse);
    self.update(self.root);
  }

  update(source) {
    let self = this;
    let treeData = self.treeMap(self.root);
    let
      nodesData = treeData.descendants(),
      linksData = treeData.descendants().slice(1);

    nodesData.forEach(d => d.y = d.depth * 180);

    // nodes part
    //
    //

    let nodes = self.svg.selectAll('g.node')
      .data(nodesData, d => (d.id || (d.id = ++self.i)));

    nodesData.forEach((d) => {
      d.x0 = d.x;
      d.y0 = d.y;
    });

    let nodesEnter = nodes.enter().append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${source.y0},${source.x0})`)
      .on('click', (d) => {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        self.update(d);
      })
    ;

    nodesEnter.append('circle')
      .attr('class', 'node')
      .attr('r', 1e-6)
      .style('fill', d => d._children ? "green" : "#fff");

    nodesEnter.append('text')
      .attr('dy', '.35em')
      .attr('x', d => (d.children || d._children ? -13 : 13))
      .attr('text-anchor', d => (d.children || d._children ? "end" : "start"))
      .style('fill', '#555')
      .style('filter', 'url(#glow)')
      .text(d => d.data.name);

    nodesEnter.append('text')
      .attr('dy', '.35em')
      .attr('x', d => (d.children || d._children ? -13 : 13))
      .attr('text-anchor', d => (d.children || d._children ? "end" : "start"))
      .text(d => d.data.name);

    // define nodes update behavior
    let nodesUpdate = nodesEnter.merge(nodes);
    nodesUpdate.transition()
      .duration(DURATION)
      .attr('transform', d => `translate(${d.y}, ${d.x})`);

    nodesUpdate.select('circle.node')
      .attr('r', 10)
      .style('fill', (d) => d._children ? 'steelblue' : '#cfc')
      .attr('cursor', 'pointer');

    // define nodes exit behavior
    let nodesExit = nodes.exit().transition()
      .duration(DURATION)
      .attr('transform', d => `translate(${source.y}, ${source.x})`)
      .remove();

    nodesExit.select('circle').attr('r', 1e-6);
    nodesExit.select('text').style('fill-opacity', 1e-6);

    // nodes part end
    //
    //

    // links part
    //
    //
    let links = this.svg.selectAll('path.link').data(linksData, d => d.id);
    console.debug(links);
    let linksEnter = links.enter().insert('path', 'g')
      .attr('class', 'link')
      .attr('stroke', '#ccc')
      .attr('stroke-width', '2px')
      .attr('fill', 'None')
      .attr('d', (d: any) => {
        let o = {x: source.x0, y: source.y0};
        return diagonal(o, o);
      });
    // UPDATE
    let linksUpdate = linksEnter.merge(links);
    // back to parent element position
    linksUpdate.transition()
      .duration(DURATION)
      .attr('d', d => diagonal(d, d.parent));

    let linksExit = links.exit().transition()
      .duration(DURATION)
      .attr('d', (d) => {
        let o = {x: source.x, y: source.y};
        return diagonal(o, o);
      }).remove();
    // links part end
    //
    //

  }

}

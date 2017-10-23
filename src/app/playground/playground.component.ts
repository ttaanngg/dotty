import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as d3 from 'd3';
import * as $ from 'jquery';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit, AfterViewInit {

  svg: any;
  linkTextElements: any;
  linkElements: any;
  nodeElements: any;
  selected = null;
  notify: ((tag: string) => void);
  nodes: any;
  links: any;

  constructor() {
  }

  clear() {
    if (this.svg != null) this.svg.html("");
    this.selected = null;
    this.nodes = null;
    this.links = null;
    this.linkElements = null;
    this.nodeElements = null;
  }


  draw() {
    const wrapper = $('#playground-wrapper');
    const sibling = $('#info-panel');
    const WIDTH = wrapper.width();
    const HEIGHT = Math.max(sibling.height(), 500);
    const RADIUS = 40;

    this.svg = d3.select('#playground');
    this.svg
      .attr('transform-origin', '75 240')
      .attr('width', `${WIDTH}`)
      .attr('height', `${HEIGHT}`);
    let self = this;
    let simulation =
      d3.forceSimulation(this.nodes)
        .force('linkElements', d3.forceLink().id((d: any) => d.id).distance(5 * RADIUS))
        .force("collide", d3.forceCollide(RADIUS * 2).iterations(16))
        .force('charge', d3.forceManyBody())
        .force('center', d3.forceCenter(WIDTH / 2, HEIGHT / 2))
        .force('x', d3.forceX(WIDTH / 2).strength(0.0015))
        .force('y', d3.forceY(HEIGHT / 2).strength(0.0015));


    let linkWrappers = this.svg.append('g')
      .attr('class', 'links')
      .selectAll('g')
      .data(this.links)
      .enter()
      .append('g');


    this.linkElements = linkWrappers
      .append('line')
      .attr('stroke-width', 8)
      .attr('stroke', '#ffb4aa')
      .on('click', (d) => {
        console.debug(d);
        console.log('fucking click!!!');
        this.selected = d;
      });

    this.linkTextElements = linkWrappers
      .append('text')
      .attr('x', d => d.source.x)
      .attr('y', d => d.source.y)
      .attr('text-anchor', 'middle')
      .text(d => d.label)
      .style('font-size', '12px')
      .on('click', (d) => {
        console.debug('click shit:' + d);
        this.selected = {
          'label': 'fuck'
        };
      });


    this.nodeElements =
      this.svg.append('g')
        .attr('class', 'nodes').selectAll('g').data(this.nodes)
        .enter()
        .append('g').attr('transform', `translate(${WIDTH / 2}, ${HEIGHT / 2})`);

    this.nodeElements.append('circle')
      .classed('can-drill', (d) => d.children && d.children.length !== 0)
      .classed('leaf', (d) => !d.children || d.children.length === 0)
      .attr('r', RADIUS)
      .attr('fill', d => d3.color(d.group))
      .on('click', self.node_click)
      .on('dblclick', (d) => {
        if (d.children != null) {
          this.selected = d;
          console.debug(d);
          this.notify(d);
        }
      })
      .call(d3.drag().on('start', (d: any) => {
        if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      }).on('drag', (d: any) => {
        d.fx = d3.event.x;
        d.fy = d3.event.y;
      }).on('end', (d: any) => {
        if (!d3.event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      })).append('title').text(d => d.label);

    this.nodeElements
      .append('text')
      .text(d => d.id)
      .style('font-size', (d) => `${(RADIUS - 8) / d.id.length * 3.5}px`)
      .attr('dy', '.35em');


    simulation
      .nodes(this.nodes)
      .on('tick', () => this.ticked());

    (<d3.ForceLink<any, any>>(simulation.force('linkElements'))).links(this.links);

  }

  ngAfterViewInit() {
  }


  drill(tag: any) {
    this.notify(tag);
  }

  ticked() {

    this.linkElements
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y);

    this.linkTextElements
      .attr('x', d => (d.source.x + d.target.x) / 2)
      .attr('y', d => (d.source.y + d.target.y) / 2);

    this.nodeElements
      .attr('transform', d => {
        return `translate(${d.x}, ${d.y})`;
      });
  }

  node_click(d) {
    console.debug(d);
    // TODO: AJAX HERE
    this.selected = d;
  }

  set(nodes: any[], links: any[]) {
    this.nodes = nodes;
    this.links = links;
  }

  ngOnInit() {

  }

}

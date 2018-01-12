import {RawConfig} from "./raw.config";
import {SimulationLinkDatum, SimulationNodeDatum} from "d3-force";

export class Config {
  nodes: NodeType[] = [];
  links?: LinkType[] = [];
}

export class NodeType implements SimulationNodeDatum {
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;

  id: string | number;
  label: string;
  group: string;
  type: string;
  children?: Config;
  attrs?: {};
}

export class LinkType implements SimulationLinkDatum<NodeType> {
  source: any;
  target: any;
  label: string;
  mutual = false;
  attrs?: {};
}


export function translate(rawConfig: RawConfig): NodeType {

  let config = new Config();
  let top = new NodeType();

  let defaultColor = rawConfig.labels['default'];
  let validators = [];
  console.log(rawConfig.labels)
  for (let key in rawConfig.labels) {
    let value = rawConfig.labels[key]
    console.log([key,value])

    if (key === 'default') continue;
    let segs = key.split('-');
    let left = +segs[0];
    let right = +segs[1];
    validators.push(function (a) {
      if (left <= a && a <= right) return value;
      return '';
    })
  }

  for (let i = 0; i < rawConfig.matrix.length; i++) {
    let node = new NodeType();
    node.group = '';
    node.id = '' + i;
    node.label = '' + i;
    for (let validator of validators) {
      let group = validator(i);
      if (group !== '') {
        node.group = group;
        break;
      }
    }
    if (node.group === '') node.group = defaultColor;
    config.nodes.push(node);
  }
  let memo = new Map<string, LinkType>();
  for (let i = 0; i < rawConfig.matrix.length; i++) {
    for (let j = 0; j < rawConfig.matrix[i].length; j++) {
      if (i === j) continue;
      let key = '' + i + '-' + j;
      let reverse_key = '' + j + '-' + i;
      if (rawConfig.matrix[i][j] === 1) {
        if (memo.has(reverse_key)) {
          memo.get(reverse_key).mutual = true;
        } else {
          let link = new LinkType();
          link.source = '' + i;
          link.target = '' + j;
          config.links.push(link);
          memo.set(key, link);
        }
      }
    }
  }
  top.id = 'TOP';
  top.label = 'TOP';
  top.children = config;
  top.type = 'NULL';
  top.group = '#fff';
  return top;
}


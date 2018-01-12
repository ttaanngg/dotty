/**
 * Created by tangweiqiang on 2017/9/1.
 */

export class RawConfig {
  labels: any;
  matrix: number[][];
}

export let rawConfig: RawConfig = {
  labels: {
    "1-10": "red",
    "default": "blue",
  },
  matrix: [
    [0, 1, 0],
    [0, 0, 1],
    [0, 1, 0]
  ]
};

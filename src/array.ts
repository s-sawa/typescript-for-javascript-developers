export {};

// 書き方1
let numbers: number[] = [1, 2, 3];

// 書き方2 interface
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ["1", "2", "3"];

let strings: string[] = ["a", "b"];

let nijigenHairetsu: number[][] = [
  [1, 2],
  [3, 4],
];

let hairetsu: (string | number | boolean)[] = [1, "b", false];

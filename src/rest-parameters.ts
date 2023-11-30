export {};

const reducer = (acc: number, curr: number): number => {
  console.log({ acc, curr });
  return acc + curr;
};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));


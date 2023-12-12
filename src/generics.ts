export {};

// 以下の似ている２つの関数をジェネリクスで一つの関数で使えるようにする
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// Tはnumber型にもstring型にもなる。型引数という
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>("hello"));
console.log(echo<boolean>(true));

class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<string>('hello,generics!!').echo());

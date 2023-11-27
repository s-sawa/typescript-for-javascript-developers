export {};

// 関数の中で例外を発生しているため、resultは得られない
// 呼びもとに戻ってこないような関数の戻り値に対応するアノテーションはnever
// void:returnされる値がないことを意味する、呼び元にはもどる  never:戻ってこないことを意味する
const error = (message: string): never => {
  throw new Error(message);
};

try {
  let result = error("test");
  console.log({ result });
} catch (error) {
  console.log({ error });
}

let foo: void = undefined;
// never型は値という概念がないから代入できない
// しかしerrorだけは可能
// let bar: never = undefined;
let bar: never = error("only me");

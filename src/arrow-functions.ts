export {};

// bmiに関数を代入しているのでbmiにマウスカーソル合わせて表示されている型推論をbmiにあててあげればいい
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => {
  return weight / height ** 2;
};
console.log(bmi(1.78, 86));

export {};

// returnしない関数にはvoid型をつける
const returnNothing = (): void => {
  console.log("i don't return anything");
};

console.log(returnNothing());

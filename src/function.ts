export {};

// ():number は戻り値の型
const bmi = (height: number, weight: number): number => {
  return weight / height ** 2;
};
console.log(bmi(1.78, 86));

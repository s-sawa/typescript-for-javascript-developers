export {};

// デフォルトパラメータ
// 関数に値が渡されない、またはundefinedが渡された時にデフォルト値で初期化されるもの

const nextYearSalary = (currentSalary: number, rate: number = 1.1): number => {
  return currentSalary * rate;
};

// 第２引数がある場合
// console.log(nextYearSalary(1000, 1.05));

console.log(nextYearSalary(1000));

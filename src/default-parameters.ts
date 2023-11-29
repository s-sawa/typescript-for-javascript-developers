export {};

// デフォルトパラメータ
// 関数に値が渡されない、またはundefinedが渡された時にデフォルト値で初期化されるもの

const nextYearSalary = (currentSalary: number, rate: number = 1.1): number => {
  return currentSalary * rate;
};

console.log(nextYearSalary(1000, 1.05));

export {};

// 先頭から自動的に番号を割り振ってくれる
enum Months {
  //   January, // このままだと1月は0で出力される
  January = 1, // 先頭の数値を指定することができる
  February,
  March,
  April,
  May,
  Jun,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.December);

// オブジェクトで書く場合
const MonthsJs = {
  Jaunary: 0,
  February: 1,
};

console.log(MonthsJs.Jaunary);

enum COLORS {
  RED = "#FF0000",
  WHITE = "#FFFFFF",
  GREEN = "#008000",
  BLUE = "#0000FF",
  BLACK = "#000000",
}

let green = COLORS.GREEN;
console.log(green);

// JSだと以下のコードはエラーにならず気づかない

// COLORS.YELLOW; // YELLOWは存在しないためエラーとなる

enum COLORS {
  YELLOW = "#FFFF00",
  GLAY = "#808080",
}

// 上で追加したため使用可能
COLORS.YELLOW;

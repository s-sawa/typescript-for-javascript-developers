export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu(); // この変数は数値じゃないかも知れない

let sumAny = numberAny + 10;
// 型ガード
if (typeof numberUnknown === "number") {
  let sumUnknown = numberUnknown + 10;
}

// すぐに型がわからない時はanyではなく暫定的にunknown型のほうがよい
// その後typeofで型を絞りながら書くといい

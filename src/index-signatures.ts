export {};

// 空のオブジェクトにプロパティを追加していくときに、index-signatureが役に立つ
// オブジェクトの全てのプロパティのキーがstring で、キーに対応するバリューがstring or numberと設定している
// let profile: { [index: string]: string | number } = {};

// 以下のようにinterfaceで型の設定を外に出せる
interface Profile {
  name: string;
  underTwenty: boolean; // これを追加する場合、booleanも互換性を持たせないといけない
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "ham", underTwenty: false };

// How to write index signatures
// { [  indx: typeForeIndex]: typeForValue }
profile.name = "ham";
profile.age = 30; // ageプロパティがないのでエラーとなる

export {};

// recordは２つのジェネリクス型の型引数を持つ特殊な型
// Record<K, T>
// 同じような構造のデータ（複数のメンバ）に繰り返し型を設定する時にRecord型が役に立つ！

type Prefectures = "Tokyo" | "Chiba" | "Tottori";

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 1960 },
  Chiba: { kanji_name: "千葉", confirmed_cases: 249 },
  Tottori: { kanji_name: "鳥取", confirmed_cases: 2 },
};

export {};

type Profile = {
  name: string;
  age?: number;
  zipCored: number;
};

// 全てのキーをオプショナルな値にしたい場合
type PartialType1 = Partial<Profile>;

// 全てのプロパティを必須なものに変換してくれる型
type RequiredType = Required<Profile>;

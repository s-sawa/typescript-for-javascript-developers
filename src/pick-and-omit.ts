export {};

type DetailedProfile = {
  name: string;
  height: number;
  weight: number;
};
// 抽出
type SimpleProfile = Pick<DetailedProfile, "name" | "weight">;

// 除外
type SmallProfile = Omit<DetailedProfile, "height">;

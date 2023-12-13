export {};

let name = "shogo";
// 再代入できてしまう
name = "ham";

// ham型となる
let nickname = "ham" as const;

// nickname = "hamtaro";

let profile = {
  name: "shogo",
  height: 178,
};
// 再代入できてしまう
profile.name = "ssshogo";

let profile2 = {
  name: "shogo",
  height: 178,
} as const;

// profile2.name = "sss";
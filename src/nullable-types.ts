export {};

// 最初はageにnullを設定したい。しかしageをnumber型に設定するとエラーとなる -> union型にするとよい！
let profile: { name: string; age: number | null } = {
  name: "ham",
  age: null,
};

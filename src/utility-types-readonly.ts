export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "ham",
  age: 43,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "shigeru",
  age: 40,
};

// friend.age++; // readonlyプロパティのためエラーとなる

type YomitoriSenyo<T> = {
  readonly [P in keyof T]: T[P];
};

type YomitoriSenyoProfile = YomitoriSenyo<Profile>;

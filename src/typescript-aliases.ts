export {};

// 型エイリアス
type Mojiretsu = string;

const fooString: string = "Hello";
const fooMojiretsu: Mojiretsu = "Hello";

const example1 = {
  name: "shogo",
  age: 30,
  //   gender:"male"
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: "shogo",
  age: 30,
};

// example1の構造が変わったとしても追従できる便利なtypeof
type Profile2 = typeof example1;

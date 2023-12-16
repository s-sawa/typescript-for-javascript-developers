export {};

// parametersとは
// 関数型からパラメータの方を抽出するための使用する
//

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("ham", 43);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["Groria", 76];

// groria,76
debugProfile(...profile);







function greet(name: string, age: number) {
  console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}

// Parameters型を使ってgreet関数のパラメータの型を取得
type GreetParameters = Parameters<typeof greet>; // [string, number]

// この型を別のコンテキストで再利用可能
function logGreetParams(...params: GreetParameters) {
  const [name, age] = params;
  console.log(`Logging: Name - ${name}, Age - ${age}`);
}

greet("sho", 31);

const profile2: GreetParameters = ["shosho", 33];

logGreetParams(...profile2);

export {};

// objectだけのアノテーションだと途中で想定外の値が入っても許容されてしまう
let profile1: object = { name: "shogo" };
profile1 = { birthYear: 1992 };

let profile2: {
  name: string;
} = { name: "shogo" };


// profile2 = { name: 1 };

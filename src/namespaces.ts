export {};

// 名前空間でクラス名の競合を防げる
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      // 初期化を省略した書き方
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("sho");
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person("ssss");
console.log(meOsaka.name);

const michael = new English.Person("Michael", "Joseph", "Jackson");
console.log(michael);

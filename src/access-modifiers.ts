export {};

// public, private, protected
// インスタンスを作るための設計図
class Person {
  // アクセスできる
  public name: string;
  // Personクラスのインスタンスからはアクセスできなくなる
  private age: number;
  protected nationality: string;

  // constructorはreturnしないので型は書かなくていい
  constructor(name: string, age: number, nationality: string) {
    // Personのインスタンスのプロパティに設定する
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }
  // インスタンスメソッド
  profile(): string {
    return `name:${this.name}, age:${this.age}`; // この部分ではageにアクセスできる
  }
}

// AndroidはPersonクラスを継承したサブクラス
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    // 親クラスのコンストラクタと同じにする場合はsuper()メソッドが使える
    // 直接this,name = name; のように書くのは、継承の原則に反するので、サブクラスのコンストラクタでsuperを使うのがよい
    super(name, age, nationality);
  }

  profile(): string {
    // ageはPersonクラスの内部だけでアクセスできるため、この部分ではエラーになる
    // nationalityはprotectedのため、エラーにはならない
    return `name:${this.name}, nationality: ${this.nationality}`; // この部分ではageにアクセスできる
  }
}

let taro = new Person("taro", 30, "Japan");
// profileメソッドの内部では、privateなageを参照できている、ということ
console.log(taro.profile()); // profileメソッドであればageにアクセス可能
console.log(taro.name);
// console.log(taro.age); // ageはprivateのためアクセス不可

// private
/*
private アクセス修飾子で宣言されたメンバーは、そのメンバーを持つクラスの内部からのみアクセス可能です。
サブクラスやその他のクラスからはアクセスできません。
これはクラスの詳細な実装を隠蔽するために使用され、クラスの外部からのアクセスを完全に制限します。
*/

// protected
/*
protected アクセス修飾子で宣言されたメンバーは、そのメンバーを持つクラスおよび
そのクラスを継承したサブクラスの内部からアクセスできます。
当然クラスから作ったインスタンスからアクセスは不可
*/

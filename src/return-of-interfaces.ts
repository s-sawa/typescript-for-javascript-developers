export {};

class Mahoutsukai {}
class Souryo {}

// ２つの親クラスを継承できない、単一継承のため
class Taro extends Mahoutsukai {}

// interfaceは多重継承のようなことができる

interface Kenja {
  ionazun(): void; // シグネチャー
}

interface Senshi {
  kougeki(): void;
}

// 実装する場合はimplements
// Jiroは二つのインターフェースを2つ実装している
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }

  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
export {};

// 関数の型用意
type DebugType = () => void;
// Union型から特定の型を除外したい時にexcludeを使うととても便利！
type SomeTypes = string | number | DebugType;

// Exclude<ユニオン型を指定, 除外したい型を書く>
type FunctionType = Exclude<SomeTypes, string | number>;
// 関数の型だけ除外
type NonFunctionType = Exclude<SomeTypes, DebugType>;
// 関数の型だけ除外にはもう一つのやり方がある
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

// extract 抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

// nonnullable でnull undefinedを除外

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;

// いずれも、既存の方を再利用して新たな方をスピーディーに用意することができる！！！

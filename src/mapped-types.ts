export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

type PropertyTypes = keyof Profile;

// type Optional<T> = { [P in keyof T]?: T[P] };
type Optional<T> = { [P in keyof T]?: T[P] | null }; // nullも許容できるようにカスタマイズも可能
type OptionalProfile = Optional<Profile>;

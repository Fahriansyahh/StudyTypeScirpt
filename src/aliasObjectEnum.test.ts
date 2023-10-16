export enum dataEnum {
  REGULAR,
  GOLD,
  PLATINUM,
}

export enum Direction {
  Up = 1,
  Down = "asdsa",
  Left = "as",
  Right = 2,
}

enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

export enum FileAccess {
  //! ini juga bisa dikasih operator
  // +, -, *, /, %, <<, >>, >>>, &, |,
  // constant members
  None,
  Read = (1 + 1) * 4,
  Write = 1 / 2,
  ReadWrite = Read | Write,
  // computed member
  G = "123".length,
}

export type data = {
  id: number;
  nama: string;
  kelas: string;
  tentang: FileAccess;
};

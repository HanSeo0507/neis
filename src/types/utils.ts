// Credit: https://github.com/piotrwitek/utility-types/blob/master/src/mapped-types.ts
export type Optional<T extends object, K extends keyof T = keyof T> = Omit<T, K> &
  Partial<Pick<T, K>>;

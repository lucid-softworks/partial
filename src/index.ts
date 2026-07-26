/** Binds a leading argument tuple and returns a function for the remainder. */
export function partial<
  TLeading extends readonly unknown[],
  TRemaining extends readonly unknown[],
  TResult,
>(
  target: (...arguments_: [...TLeading, ...TRemaining]) => TResult,
  ...leading: TLeading
): (...remaining: TRemaining) => TResult {
  return (...remaining) => target(...leading, ...remaining);
}

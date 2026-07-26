import { describe, expect, expectTypeOf, it, vi } from "vitest";

import { partial } from "../src/index.js";

function add(left: number, right: number): number {
  return left + right;
}

describe("partial", () => {
  it("binds leading arguments and forwards the remainder", () => {
    const target = vi.fn<
      (prefix: string, value: number, enabled: boolean) => string
    >((prefix, value, enabled) => `${prefix}:${value}:${enabled}`);
    const bound = partial<[string], [number, boolean], string>(target, "item");

    expect(bound(2, true)).toBe("item:2:true");
    expect(target).toHaveBeenCalledWith("item", 2, true);
    expectTypeOf(bound).toEqualTypeOf<
      (value: number, enabled: boolean) => string
    >();
  });

  it("supports no leading or no remaining arguments", () => {
    expect(partial<[], [number, number], number>(add)(1, 2)).toBe(3);
    expect(partial<[number, number], [], number>(add, 1, 2)()).toBe(3);
  });
});

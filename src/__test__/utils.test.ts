import { describe } from "node:test";
import { validateQuantity } from "../util/validQuantity";
import { Product } from "../interface";

describe("Test quantity value", () => {
  it("Should return false for quantity less than 0", () => {
    let payload: Product = {
      price: 12,
      quantity: -3,
    };

    expect(validateQuantity(payload)).toBeFalsy();
  });

  it("Should return true for quantity greater than 0", () => {
    let payload: Product = {
      price: 12,
      quantity: 23,
    };

    expect(validateQuantity(payload)).toBeTruthy();
  });
});

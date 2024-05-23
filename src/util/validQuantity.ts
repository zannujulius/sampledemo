import { Product } from "../interface";

export function validateQuantity(payload: Product): boolean {
  if (payload.quantity < 0) return false;
  return true;
}

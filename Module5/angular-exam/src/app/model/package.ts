import {Product} from "./product";

export interface Package {
  id?: string,
  packageCode?: string,
  product?: Product,
  quantity?: number,
  inDate?: string,
  outDate?: string,
  expDate?: string
}

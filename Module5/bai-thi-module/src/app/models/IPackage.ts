import {IProduct} from "./IProduct";

export interface IPackage {
  id?: number;
  idPackage?: string;
  product?: IProduct;
  quantity?: number;
  dateProduct?: string;
  startDate?: string;
  endDate?: string;
}

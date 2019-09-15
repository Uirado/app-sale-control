import { BaseModel } from './base.model';

export interface Product extends BaseModel {
  name?: string;
  price?: number;
  quantity?: number;
}

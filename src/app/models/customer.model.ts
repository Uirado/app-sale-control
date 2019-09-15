import { BaseModel } from './base.model';

export interface Customer extends BaseModel {
  name?: string;
  phone?: string;
  company?: string;
  email?: string;
}

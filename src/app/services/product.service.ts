import { Injectable } from '@angular/core';
import { AbstractDatabaseService } from './abstract-database.service';
import { Product } from 'app/models/product.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends AbstractDatabaseService<Product> {

  constructor(
    protected readonly database: AngularFireDatabase,
  ) {
    super('/product', database);
  }
}

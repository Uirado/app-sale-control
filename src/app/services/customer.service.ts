import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Customer } from 'app/models/customer.model';
import { AbstractDatabaseService } from './abstract-database.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends AbstractDatabaseService<Customer> {

  constructor(
    protected readonly database: AngularFireDatabase,
  ) {
    super('/customer', database);
  }
}

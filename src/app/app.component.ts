import { Component } from '@angular/core';
import { CustomerService } from '@services/customer.service';
import { Observable } from 'rxjs';
import { Customer } from './models/customer.model';
import { ProductService } from '@services/product.service';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  customers$: Observable<Customer[]>;
  products$: Observable<Product[]>;

  product: Product = {};
  customer: Customer = {};

  constructor(
    private readonly customerService: CustomerService,
    private readonly productService: ProductService,
  ) {
    this.customers$ = this.customerService.selectList();
    this.products$ = this.productService.selectList();
  }

  addProduct() {
    this.productService.add(this.product);
    this.product = {};
  }

  addCustomer() {
    this.customerService.add(this.customer);
    this.customer = {};
  }

  removeProduct(id: string) {
    this.productService.remove(id);
  }

  removeCustomer(id: string) {
    this.customerService.remove(id);
  }
}

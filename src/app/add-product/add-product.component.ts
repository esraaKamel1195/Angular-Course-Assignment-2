import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  name: string = '';
  price: number = 0;
  descr: string = '';

  product: any = {};
  @Output() onAddProduct =  new EventEmitter<any>;

  addProduct() {
    this.product.push({
      name: this.name,
      price: this.price,
      descr: this.descr,
    });
    this.onAddProduct.emit(this.product);
  }
}


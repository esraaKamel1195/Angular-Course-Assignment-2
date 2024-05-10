import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  // name: string = '';
  // price: number = 0;
  // descr: string = '';
  product: { name: string; image: ''; price: number; description: string } = {
    name: '',
    image: '',
    price: 0,
    description: '',
  };

  @Output() onAddProduct = new EventEmitter<any>();

  addProduct() {
    // this.product.name = this.name;
    // this.product.price = this.price;
    // this.product.description = this.descr;
    this.onAddProduct.emit(this.product);
  }
}

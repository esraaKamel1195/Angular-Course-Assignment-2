import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {

  product: { name: string; image: string; price: number; description: string } =
    {
      name: '',
      image: '',
      price: 0,
      description: '',
    };

  @Output() onAddProduct = new EventEmitter<{
    name: string;
    image: string;
    price: number;
    description: string;
  }>();

  addProduct() {
    this.onAddProduct.emit(this.product);
  }
}

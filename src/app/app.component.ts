import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignment2';
  products: Array<any> = [
    { name: 'product1', image: '', price: 50, description: 'description' },
    { name: 'product2', image: '', price: 50, description: 'description' },
    { name: 'product3', image: '', price: 50, description: 'description' },
  ];

  addNewProduct(product: any) {
    this.products.push(product);
  }
}

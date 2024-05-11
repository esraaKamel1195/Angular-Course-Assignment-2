import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignment2';
  products: Array<any> = [
    { name: 'Product 1', image: '', price: 40, description: 'description' },
    { name: 'Product 2', image: '', price: 50, description: 'description' },
    { name: 'Product 3', image: '', price: 60, description: 'description' },
  ];

  addNewProduct(product: any) {
    this.products.push(product);
  }
}

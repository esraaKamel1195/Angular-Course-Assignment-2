import { Component, QueryList, ViewChildren  } from '@angular/core';
import { MealsComponent } from './meals/meals.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Assignments';
  // @ViewChildren(MealsComponent) MealsComponent: QueryList<MealsComponent> = new QueryList<>;

  products: Array<any> = [
    {
      name: 'Product 1',
      image: '../assets/Images/product.jpg',
      price: 40,
      description: 'description',
    },
    {
      name: 'Product 2',
      image: '../assets/Images/product.jpg',
      price: 50,
      description: 'description',
    },
    {
      name: 'Product 3',
      image: '../assets/Images/product.jpg',
      price: 60,
      description: 'description',
    },
  ];

  addNewProduct(product: any) {
    this.products.push(product);
  }

  meals: Array<{ name: string; image: string; discription: string }> = [
    {
      name: 'Mail 1',
      image: '../assets/Images/meal.jpg',
      discription:
        'discription discription discription discription discription',
    },
    {
      name: 'Mail 2',
      image: '../assets/Images/pizza.png',
      discription:
        'discription discription discription discription discription',
    },
    {
      name: 'Mail 3',
      image: '../assets/Images/meal.jpg',
      discription:
        'discription discription discription discription discription',
    },
  ];

  // showViewChildern(){
  //   console.log(this.MealsComponent);
  // }
}

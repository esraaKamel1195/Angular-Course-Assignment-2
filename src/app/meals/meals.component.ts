import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.css',
})
export class MealsComponent {
  @Input({ required: true }) meal: {
    name: string;
    image: string;
    discription: string;
  } = { name: '', image: '', discription: '' };
}

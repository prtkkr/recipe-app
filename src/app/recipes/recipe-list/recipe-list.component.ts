import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Recipe 1', 'Test Description Recipe', 'https://arbuz.com/wp-content/uploads/2009/07/Chicken-Mishwi.jpg'),
    new Recipe('A Recipe 1', 'Test Description Recipe', 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/happytrioexplains-gmail.com/Tandoori_Paneer_Samosa.jpg'),
    new Recipe('A Recipe 1', 'Test Description Recipe', 'https://arbuz.com/wp-content/uploads/2009/07/Chicken-Mishwi.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

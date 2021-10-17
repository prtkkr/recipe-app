import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Recipe 1', 'Test Description Recipe 1', 'https://arbuz.com/wp-content/uploads/2009/07/Chicken-Mishwi.jpg'),
    new Recipe('A Recipe 2', 'Test Description Recipe 2', 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/happytrioexplains-gmail.com/Tandoori_Paneer_Samosa.jpg'),
    new Recipe('A Recipe 3', 'Test Description Recipe 3', 'https://arbuz.com/wp-content/uploads/2009/07/Chicken-Mishwi.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('testRecipe', 'this is dummy',
               'https://get.pxhere.com/photo/penne-dish-cuisine-italian-food-european-food-penne-alla-vodka-food-pasta-pomodoro-pasta-spaghetti-alla-puttanesca-vegetarian-food-side-dish-rigatoni-american-food-junk-food-recipe-1539171.jpg'),
    new Recipe('testRecipe', 'this is dummy',
               'https://get.pxhere.com/photo/penne-dish-cuisine-italian-food-european-food-penne-alla-vodka-food-pasta-pomodoro-pasta-spaghetti-alla-puttanesca-vegetarian-food-side-dish-rigatoni-american-food-junk-food-recipe-1539171.jpg')
  ];



  constructor() {
  }

  ngOnInit(): void {
  }

  onSelectedRecipe(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

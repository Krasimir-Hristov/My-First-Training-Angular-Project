import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/shared/ingredient.model";

import { Recipe } from "./recipe.model";

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
        'This is simply a test', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7pfrSCRLkoNVtNYe5cK6cKR3oEmuSf0xnQ&usqp=CAU', 
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20),
        ]),
        new Recipe('Another Test Recipe',
        'This is simply a test', 
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ7pfrSCRLkoNVtNYe5cK6cKR3oEmuSf0xnQ&usqp=CAU', 
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1),
        ])
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}
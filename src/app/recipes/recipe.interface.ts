import { Ingredient } from "../shared/ingredients.model";

export interface Recipe {
        id: number
        name: string;
        description: string;
        imagePath: string;
        ingredients: Ingredient[];
};
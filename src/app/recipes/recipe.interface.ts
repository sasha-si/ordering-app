import { Ingredient } from "../shared/ingredient.interface";

export interface Recipe {
        id: number;
        name: string;
        description: string;
        imagePath: string;
        ingredients: Ingredient[];
};
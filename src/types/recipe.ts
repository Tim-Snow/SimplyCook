export type Recipes = Array<{
  id: number;
  name: string;
  averageRating: string;
  cookingTime: string;
  image: string;
  admin: any;
  isShoppable: boolean;
  slug: {
    twoPerson: {
      regular: string;
      veg?: string;
    };
    fourPerson?: {
      regular: string;
      veg?: string;
    };
  };
  description: string;
  isOrderable: number;
  shortDescription: string;
  numberOfRatings: any;
  numberOfRatingsRaw: number;
  chilli: number;
  preferences: Array<string>;
  topRated: any;
  cheapEats: any;
  new: boolean;
  improved: boolean;
  imageTall: string;
  inStock: boolean;
  servings: number;
  cuisineType: string;
  vegan: boolean;
  vegetarian: boolean;
  lowCal: boolean;
  topReview?: string;
  calories: number;
  fourPersonCalories?: number;
  justAdd: {
    twoPerson: {
      regular: {
        main: Array<string>;
        suffix: Array<string | undefined>;
        optional?: Array<string>;
        suffixOptional?: Array<string | undefined>;
        cupboard?: Array<string>;
        suffixCupboard?: Array<string | undefined>;
      };
      veg?: {
        main: Array<string>;
        suffix: Array<string | undefined>;
        optional?: Array<string>;
        suffixOptional?: Array<string | undefined>;
        cupboard?: Array<string>;
        suffixCupboard?: Array<string | undefined>;
      };
    };
    fourPerson?: {
      regular: any;
      veg?: {
        main: Array<string>;
        suffix: Array<string | undefined>;
        optional: Array<string>;
        suffixOptional: Array<any>;
      };
    };
  };
  mainIngredients: Array<string>;
  allergens: Array<string>;
  childAllergens: Array<any>;
  imageFormatGroup?: {
    webp: string;
    jpg: string;
    png: string;
  };
  imageTallFormatGroup?: {
    webp: string;
    jpg: string;
    png: string;
  };
  favouritedByCurrentCustomer: any;
  orderedByCurrentCustomer: any;
  customerReviewForRecipe: any;
  tag?: {
    name: string;
    slug: string;
    hexClr: string;
    iconUrl: string;
  };
  numberOfTimesCookedByCustomer: number;
  lastCooked: any;
  boxRecipeId: any;
  toggleServings: any;
  toggleVegRegular: any;
  recipeId: any;
  enabled: number;
}>;

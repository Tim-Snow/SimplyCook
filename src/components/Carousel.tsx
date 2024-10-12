import {useRecipes} from '../context/RecipeProvider';

export function Carousel() {
  const {state, recipes} = useRecipes();

  console.log({state, recipes});

  return null;
}

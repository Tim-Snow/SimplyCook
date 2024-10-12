import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Recipes} from '../types/recipe';

type Context = {
  state: 'LOAD' | 'OK' | 'KO';
  recipes: Recipes | undefined;
};

const defaultContext = {
  state: 'LOAD',
  recipes: undefined,
} as const;

const RecipeContext = createContext<Context>(defaultContext);

const desiredAllergens = ['Crustaceans', 'Fish', 'Eggs'];

export function RecipeProvider(props: PropsWithChildren) {
  const [state, setState] = useState<Context>(defaultContext);

  useEffect(() => {
    fetch('https://www.simplycook.com/api/recipes')
      .then(r => r.json())
      .then((json: Recipes) =>
        json.filter(recipe =>
          recipe.allergens.some(allergen =>
            desiredAllergens.includes(allergen),
          ),
        ),
      )
      .then(filtered => {
        setState({
          state: 'OK',
          recipes: filtered,
        });
      })
      .catch(() => setState(s => ({...s, state: 'KO'})));
  }, []);

  return (
    <RecipeContext.Provider value={state}>
      {props.children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  const context = useContext(RecipeContext);

  if (context === undefined) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }

  return context;
}

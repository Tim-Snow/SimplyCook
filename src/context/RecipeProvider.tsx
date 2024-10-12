import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {Recipes} from '../types/recipe';

type State = {
  state: 'LOAD' | 'OK' | 'KO';
  recipes: Recipes | undefined;
};

const defaultState = {
  state: 'LOAD',
  recipes: undefined,
} as const;

const RecipeContext = createContext<
  {state: State; retry: () => void} | undefined
>(undefined);

const desiredAllergens = ['Crustaceans', 'Fish', 'Eggs'];

export function RecipeProvider(props: PropsWithChildren) {
  const [state, setState] = useState<State>(defaultState);

  const getData = useCallback(() => {
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

  useEffect(getData, [getData]);

  const value = useMemo(() => ({state, retry: getData}), [getData, state]);

  return (
    <RecipeContext.Provider value={value}>
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

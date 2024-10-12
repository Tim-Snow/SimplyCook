import React, {ActivityIndicator, FlatList} from 'react-native';
import {useRecipes} from '../context/RecipeProvider';
import {Card} from './Card';

export function Carousel() {
  const {state, recipes} = useRecipes();

  if (state === 'LOAD') {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      horizontal
      data={recipes}
      renderItem={d => (
        <Card
          key={d.item.id}
          image={{height: 262, width: 390, uri: d.item.image}}
          front={{name: d.item.name, desc: d.item.shortDescription}}
          back={{
            time: d.item.cookingTime,
            rating: d.item.averageRating,
            topReview: d.item.topReview,
            chilli: d.item.chilli,
          }}
        />
      )}
    />
  );
}

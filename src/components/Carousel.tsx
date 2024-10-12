import React, {
  ActivityIndicator,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useRecipes} from '../context/RecipeProvider';
import {Card} from './Card';

export function Carousel() {
  const {
    state: {state, recipes},
  } = useRecipes();

  if (state === 'LOAD') {
    return <ActivityIndicator />;
  }

  if (state === 'KO') {
    return <Error />;
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

function Error() {
  const {retry} = useRecipes();
  return (
    <View style={styles.errorContainer}>
      <Text>Oops, something went wrong!</Text>
      <Pressable onPress={retry}>
        <View style={styles.button}>
          <Text>Try again</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    width: 90,
    height: 52,
    borderRadius: 10,
    backgroundColor: '#7777AA',
    padding: 12,
    margin: 12,
  },
});

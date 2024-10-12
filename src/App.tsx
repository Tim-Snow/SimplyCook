import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {RecipeProvider} from './context/RecipeProvider';
import {Carousel} from './components/Carousel';
import {Card} from './components/Card';

const front = {name: 'test', desc: 'desc'};
const back = {time: '5 min', rating: 5, reviewText: 'review text', chilli: 3};

export function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Card
          image={{
            height: 262,
            width: 390,
            uri: 'https://simplycook.imgix.net/recipes/Malay_Laksa_Web_240718.jpg?dpr=1&fit=crop&fm=jpg&h=262&ixlib=php-1.2.1&lossless=0&q=50&w=390&s=4eada8f881f42813103ad57a1504f80f',
          }}
          front={front}
          back={back}
        />
        <RecipeProvider>
          <Carousel />
        </RecipeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

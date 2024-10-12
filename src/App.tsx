import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {RecipeProvider} from './context/RecipeProvider';
import {Carousel} from './components/Carousel';

export function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <RecipeProvider>
          <Carousel />
        </RecipeProvider>
      </ScrollView>
    </SafeAreaView>
  );
}

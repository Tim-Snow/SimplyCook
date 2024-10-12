import React, {useCallback, useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

type Props = {
  front: FrontProps;
  back: BackProps;
  image: ImageSourcePropType;
};

type FrontProps = {
  name: string;
  desc: string;
};

type BackProps = {
  time: string;
  rating: string;
  topReview?: string;
  chilli: number;
};

export function Card({image, front, back}: Props) {
  const [display, setDisplay] = useState<'front' | 'back'>('front');

  const flip = useCallback(
    () => setDisplay(p => (p === 'front' ? 'back' : 'front')),
    [],
  );

  return (
    <TouchableOpacity onPress={flip} style={styles.container}>
      <Image source={image} style={styles.image} />
      {display === 'front' ? <Front {...front} /> : <Back {...back} />}
    </TouchableOpacity>
  );
}

function Front({name, desc}: FrontProps) {
  return (
    <>
      <Text numberOfLines={2} style={styles.titleText}>
        {name}
      </Text>
      <Text numberOfLines={2}>{desc}</Text>
    </>
  );
}

function Back({time, rating, topReview, chilli}: BackProps) {
  return (
    <>
      <Text>🕔 {time} mins</Text>
      <Text style={styles.ratingText}>⭐️ {rating}/5</Text>
      {topReview && <Text>📖 {topReview}</Text>}
      <Text>🌶️ {heat[chilli]}</Text>
    </>
  );
}

const heat = ['Not spicy', 'Mild', 'Medium', 'Hot'];

const styles = StyleSheet.create({
  container: {
    width: 200,
    minHeight: 220,
    padding: 12,
  },
  image: {
    borderRadius: 8,
    maxWidth: 176,
    maxHeight: 126,
    marginBottom: 8,
  },
  titleText: {
    fontWeight: 'bold',
  },
  ratingText: {
    color: 'orange',
  },
});

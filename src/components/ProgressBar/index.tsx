import React from 'react';

import {
  View, Text
} from 'react-native';

import { styles } from './styles';

type Props = {
  value: number;
}

export function ProgressBar({ value }: Props ){
  
  return (
    <View style={styles.container}>
      <Text style={styles.value}>
        {value}%
      </Text>
      <View style={styles.progress}>
        <View style={[styles.progressFill, {
          width: `${value}%`
        }]} />
      </View>
    </View>
  );
}
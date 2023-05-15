import React , { useState } from 'react';

import {
  Text, ScrollView, View, useWindowDimensions
} from 'react-native';


import { styles } from './styles';
import { ProgressBar } from '../../components/ProgressBar';

type Props = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
}

export function Post(){
  const [ percentage, setPercentage ] = useState(0);
  const dimensions = useWindowDimensions();

  function handleScroll({ layoutMeasurement, contentOffset, contentSize }: Props)
  {
    const visibleHeight = Math.ceil((dimensions.height / contentSize.height) * 100);

    const value = Math.ceil(((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100);

    
    if (value >= 100) {
      setPercentage(100);
    }
    else {
      setPercentage(value < visibleHeight ? 0 : value);
    }


  }

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        onScroll={(e) => handleScroll(e.nativeEvent)}
        scrollEventThrottle={16}
      >
        <Text style={styles.title}>Post</Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum sapien ac lectus finibus, sed dignissim arcu dignissim. Nullam finibus auctor felis, vel condimentum erat pretium sed. Maecenas eget consequat leo. Donec vestibulum fringilla eleifend. Duis in mi aliquam, faucibus dui ut, molestie quam. Curabitur sit amet rhoncus mauris. Sed vulputate urna in congue volutpat.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum sapien ac lectus finibus, sed dignissim arcu dignissim. Nullam finibus auctor felis, vel condimentum erat pretium sed. Maecenas eget consequat leo. Donec vestibulum fringilla eleifend. Duis in mi aliquam, faucibus dui ut, molestie quam. Curabitur sit amet rhoncus mauris. Sed vulputate urna in congue volutpat.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum sapien ac lectus finibus, sed dignissim arcu dignissim. Nullam finibus auctor felis, vel condimentum erat pretium sed. Maecenas eget consequat leo. Donec vestibulum fringilla eleifend. Duis in mi aliquam, faucibus dui ut, molestie quam. Curabitur sit amet rhoncus mauris. Sed vulputate urna in congue volutpat.
        </Text>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum sapien ac lectus finibus, sed dignissim arcu dignissim. Nullam finibus auctor felis, vel condimentum erat pretium sed. Maecenas eget consequat leo. Donec vestibulum fringilla eleifend. Duis in mi aliquam, faucibus dui ut, molestie quam. Curabitur sit amet rhoncus mauris. Sed vulputate urna in congue volutpat.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum sapien ac lectus finibus, sed dignissim arcu dignissim. Nullam finibus auctor felis, vel condimentum erat pretium sed. Maecenas eget consequat leo. Donec vestibulum fringilla eleifend. Duis in mi aliquam, faucibus dui ut, molestie quam. Curabitur sit amet rhoncus mauris. Sed vulputate urna in congue volutpat.
        </Text>

        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fermentum sapien ac lectus finibus, sed dignissim arcu dignissim. Nullam finibus auctor felis, vel condimentum erat pretium sed. Maecenas eget consequat leo. Donec vestibulum fringilla eleifend. Duis in mi aliquam, faucibus dui ut, molestie quam. Curabitur sit amet rhoncus mauris. Sed vulputate urna in congue volutpat.
        </Text>
      </ScrollView>

      <ProgressBar value={percentage}/>
    </View>
  );
}
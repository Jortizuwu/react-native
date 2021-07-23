import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme/appTheme';
import {useEffect} from 'react';

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'hola mundo',
      headerBackTitle: ""
    });
  }, []);

  return (
    <View style={styles.goblaMargin}>
      <Text style={styles.title}>pagina2Screeen</Text>
      <Button
        title="ir pagina 3"
        onPress={() => navigator.navigate('Pagina3')}
      />
    </View>
  );
};

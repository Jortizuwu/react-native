import React from 'react';
import {View, Text, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.goblaMargin}>
      <Text style={styles.title}>pagina3Screeen</Text>

      <Button title="Return" onPress={() => navigation.pop()} />
      <Button title="Ir a home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

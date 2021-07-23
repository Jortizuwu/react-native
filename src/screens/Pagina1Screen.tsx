import {DrawerScreenProps} from '@react-navigation/drawer';
// import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {useEffect} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {styles} from '../theme/appTheme';

// interface Props extends StackScreenProps<any, any> {}
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="uwu"
          onPress={() => {
            navigation.toggleDrawer();
          }}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.goblaMargin}>
      <Text style={styles.title}>pagina1Screeen</Text>
      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2')}
      />
      <Text style={{marginVertical:10,fontSize:20}}>Navegar con argumentos</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.btnBig,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'blue',
          }}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 1,
              name: 'jojo',
            })
          }>
          <Text style={{...styles.btnBigColor, color: 'black'}}>Jojo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnBig}
          onPress={() =>
            navigation.navigate('Persona', {
              id: 2,
              name: 'jojo2',
            })
          }>
          <Text style={styles.btnBigColor}>Jojo2</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

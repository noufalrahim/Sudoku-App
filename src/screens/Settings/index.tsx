import {Alert, Linking, View} from 'react-native';
import React from 'react';
import HeaderBox from '../../components/HeaderBox';
import SettingTiles from './SettingsTile';


export default function Settings({navigation}:any) {

  const settingsTitles = [
    {
      heading: 'Customize',
      onPress: () => {
        console.log('Customize');
        navigation.navigate("Customize");
      },
      icon: 'pencil'
    },
    {
      heading: 'About',
      onPress: () => {
        Alert.alert(
          'About',
          "A simple app to play sudoku \n\n© 2024 NOUFAL RAHIM. \n\nALL RIGHTS RESERVED.",
        );
        console.log('About');
      },
      icon: 'information-outline',
    },
    {
      heading: 'Help',
      onPress: () => {
        Alert.alert(
          'Help',
          'If you have any queries or need help, please contact me at \n\nnoufalrahim6784@gmail.com',
        );
        console.log('Help');
      },
      icon: 'help-circle-outline',
    },
    {
      heading: 'Github Repository',
      onPress: () => {
        const url = 'https://github.com/noufalrahim/Sudoku-App';
        Linking.openURL(url).catch(err =>
          console.error('An error occurred', err),
        );
        console.log('Github Repository');
      },
      icon: 'chevron-right',
    },
  ];

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <HeaderBox title={'Settings'} showSettingsIcon={false} />
      <View>
        {settingsTitles.map((tile, index) => {
          return (
            <SettingTiles
              key={index}
              title={tile.heading}
              onPress={tile.onPress}
              icon={tile.icon}
            />
          );
        })}
      </View>
    </View>
  );
}

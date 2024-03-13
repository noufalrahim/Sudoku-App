import {StyleSheet, Text, View, Pressable, Alert} from 'react-native';
import React from 'react';
import AddBtn from '../../components/AddBtn';
import HeaderBox from '../../components/HeaderBox';
import TableBox from '../../components/Table';
import NumberPad from '../../components/NumberPad';
import DropDown from '../../components/Dropdown';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}: any) {
  const [loading, setLoading] = React.useState(false);
  const [numberPressed, setNumberPressed] = React.useState(0);
  const [refresh, setRefresh] = React.useState(false);
  const [value, setValue] = React.useState('Medium');
  const STORAGE_KEY = 'themeColor';
  const [themeColor, setThemeColor] = React.useState('red');

  const retrieveData = async () => {
    try {
      // Retrieve data from AsyncStorage
      const storedData = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedData !== null) {
        setThemeColor(storedData);
        console.log('Data retrieved successfully:', storedData);
      } else {
        console.log('No data found in AsyncStorage');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  React.useEffect(() => {
    retrieveData();
  }
  , []);

  const handleLoadingState = (state: boolean) => {
    setLoading(state);
  }

  const handleValueChange = (value: string) => {
    setValue(value);
  }

  const handleNumberPressed = (number: number) => {
    console.log("Home");
    console.log(`Number ${number} pressed`);
    setNumberPressed(number);
  }

  const refreshHandler = () => {
  Alert.alert(
      'Refresh',
      'Are you sure you want to refresh the game?\n\n A new board will be generated.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Refresh', onPress: () => setRefresh(!refresh)},
      ],
      {cancelable: false},
    );
  }

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
      }}>
      <HeaderBox
        title={"Sudoku"}
        showSettingsIcon={true}
        navigation={navigation}
      />

      <View style={{alignItems: 'flex-end', marginBottom: 70,}}>
        <DropDown value={value} setValue={handleValueChange}/>
      </View>

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          zIndex: 0,
          position: 'relative',
        }}>
        <TableBox themeColor={themeColor} value={value} setIsLoading={handleLoadingState} refresh={refresh} selectedNo={numberPressed}/>
        {
          !loading && <NumberPad themeColor={themeColor} setNumberPressed={handleNumberPressed} numberPressed={numberPressed}/>
        }
      </View>
      <AddBtn themeColor={themeColor} onPress={refreshHandler}/>
    </View>
  );
}



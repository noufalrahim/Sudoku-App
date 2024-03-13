import { Alert, StyleSheet, View } from 'react-native'
import React from 'react'
import HeaderBox from '../../components/HeaderBox'
import { Appbar } from 'react-native-paper';
import { RadioButton, Text } from 'react-native-paper';
import { themeColors } from '../../../utils/AppConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HeaderBar({ navigation }: any) {
    return (
        <Appbar.Header
            style={{
                backgroundColor: 'black',
            }}
        >
            <Appbar.BackAction
                color='white'
                onPress={() => { navigation.goBack() }} />
            <Appbar.Content title="Customize"
                color='white'
            />
        </Appbar.Header>
    )
}

function RadioGroup({ value, setValue }: any) {
    return (
        <RadioButton.Group
            onValueChange={newValue => setValue(newValue)} value={value}>
            <>
                {
                    themeColors.map((colorItem, index) => {
                        return (
                            <View
                                key={index}
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    marginHorizontal: 15,
                                    marginVertical: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        color: 'white',
                                        fontSize: 20,
                                    }}
                                >{colorItem.name}</Text>
                                <RadioButton value={colorItem.color} color={colorItem.color} />
                            </View>
                        )
                    }
                    )
                }
            </>
        </RadioButton.Group>
    )
}

export default function CustomizeScreen({ navigation }: any) {
    const [value, setValue] = React.useState('red');

    const retrieveData = async () => {
        try {
          const storedData = await AsyncStorage.getItem('themeColor');
          if (storedData !== null) {
            setValue(storedData);
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
      },[]);

    const storeData = async () => {
        try {
          await AsyncStorage.setItem('themeColor', value);
          console.log('Color stored successfully!');
        } catch (error) {
          console.error('Error storing data:', error);
        }
      };

    React.useEffect(() => {
        storeData();
    },[value]);

    const handleValueChange = (newValue: string) => {
        setValue(newValue);
        Alert.alert(
            'Theme Changed',
            'Please restart the app to see the changes',
            [
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                },
            ],
            { cancelable: false }
        );
    }
    return (
        <View
            style={{
                backgroundColor: 'black',
                flex: 1,
            }}
        >
            <HeaderBar navigation={navigation} />
            <View
                style={{
                    marginTop: 20,
                    justifyContent: 'center',
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 20,
                        marginHorizontal: 15,
                        marginBottom: 10,
                    }}
                >Choose a theme</Text>
                <RadioGroup
                    value={value}
                    setValue={handleValueChange}
                />
            </View>
        </View>
    )
}


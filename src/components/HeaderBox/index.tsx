import {StyleSheet, Text, View} from 'react-native';
import {Pressable} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HeaderBox({title, showSettingsIcon, navigation}: any) {
  const pressHandler = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Headingtext}>{title}</Text>
      {showSettingsIcon ? (
        <Pressable onPress={() => pressHandler()}>
          <Ionicons
            name="settings-outline"
            size={24}
            color="white"
            style={styles.DeleteIcon}
          />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    marginLeft: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Headingtext: {
    fontSize: 40,
    color: 'white',
  },
  DeleteIcon: {
    color: 'white',
    marginHorizontal: 20,
  },
});

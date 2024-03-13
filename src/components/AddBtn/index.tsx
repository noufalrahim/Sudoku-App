import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FAB } from 'react-native-paper';

export default function AddBtn({onPress, themeColor}: {onPress: () => void, themeColor: any}){
  return (
    <FAB
      style={[styles.fab, {backgroundColor: themeColor}]}
      icon="refresh"
      onPress={onPress}
      color={`${themeColor === 'yellow' ? 'black' : 'white'}`}
    />
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

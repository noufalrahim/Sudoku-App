import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Seperator from '../../components/Seperator';

export default function SettingTiles({title, onPress, icon}: any) {
  return (
    <>
      <TouchableOpacity
        style={{
          marginHorizontal: 25,
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingVertical: 20,
        }}
        onPress={onPress}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
          }}>
          {title}
        </Text>
        <Icons name={icon} size={24} color="grey" />
      </TouchableOpacity>
      <Seperator />
    </>
  );
}

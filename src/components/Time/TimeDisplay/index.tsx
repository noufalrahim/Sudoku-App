import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function TimeDisplay() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.time}>1:20</Text>
      </View>
      <View style={styles.ampmContainer}>
        <Text style={styles.ampm}>PM</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 50,
  },
  ampm: {
    fontSize: 20,
  },
  ampmContainer: {
    height: 50,
    width: 40,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

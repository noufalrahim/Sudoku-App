import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function DropDown({value, setValue}: any) {
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = React.useState([
    {label: 'Easy', value: 'Easy'},
    {label: 'Medium', value: 'Medium'},
    {label: 'Hard', value: 'Hard'},
  ]);

  return (
    <View style={styles.container}>
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={styles.dropdown}
      placeholder='Difficulty level'
    />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdown: {
    width: 150,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  container: {
    alignItems: 'flex-end',
    position: 'absolute',
    top: 10,
    right: 10,
  },
});
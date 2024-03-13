import {View} from 'react-native';
import React from 'react';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

export default function TimePicker() {
  const [chosenTime, setChosenTime] = React.useState<Date | undefined>(
    undefined,
  );

  const setDate = (event: DateTimePickerEvent, date: Date) => {
    const {
      type,
      nativeEvent: {timestamp, utcOffset},
    } = event;

    console.log('Event:', type);
    console.log('Timestamp:', timestamp);
    console.log('UTC Offset:', utcOffset);

    const istTimeString = date.toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
    });
    console.log('Indian Standard Time (IST):', istTimeString);
    setChosenTime(date);
  };

  return (
    <View>
      {chosenTime === undefined && (
        <RNDateTimePicker
          mode="time"
          value={new Date()}
          display="clock"
          onChange={(event, date: any) => setDate(event, date)}
        />
      )}
    </View>
  );
}

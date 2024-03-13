import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const NumberPad = ({setNumberPressed, themeColor, textColor}: any) => {

    const Numbers = [[1,2,3], [4,5,6], [7,8,9]];

    const handleNumberPressed = (number: number) => {
        console.log(`Number ${number} pressed`);
        setNumberPressed(number);
    }

    return (
        <View style={{marginTop: 30}}>
            {Numbers.map((row, rowIndex) => (
                <View key={rowIndex} style={{flexDirection: 'row'}}>
                    {row.map((cell, colIndex) => (
                        <TouchableOpacity
                            key={colIndex}
                            style={{
                                width: 40,
                                height: 40,
                                backgroundColor: themeColor,
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: 5,
                            }}
                            onPress={() => handleNumberPressed(cell)}
                        >
                            <Text 
                            style={{fontSize: 20,
                                color: `${themeColor === 'yellow' ? 'black' : 'white'}`
                            }}>{cell}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    )
}

export default NumberPad
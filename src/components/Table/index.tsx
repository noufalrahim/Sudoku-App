import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { fetchSudoku } from '../../api';
import { MatrixChecker } from '../../../utils/MatrixChecker';
import WinModal from '../WinModal';

const TableBox = ({ setIsLoading, refresh, selectedNo, value, themeColor }: any) => {
    const [grid, setGrid] = useState<any>([]);
    const [resultGrid, setResultGrid] = useState<any>([
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]);    
    const [loading, setLoading] = useState(false);
    const [selectedCell, setSelectedCell] = useState<any>(null);

    const fetchSudokuBoard = () => {
        try {
            setLoading(true);
            setIsLoading(true);
    
            fetchSudoku().then((data) => {
                console.log("Data");
                console.log(data[0]);
    
                if (value === 'Easy') {
                    value = 'Medium';
                }
    
                if (data[0].difficulty !== value) {
                    fetchSudokuBoard();
                } else {
                    function multiplyDeclaredCellBy10(grid: any) {
                        for (let i = 0; i < grid.length; i++) {
                            for (let j = 0; j < grid[i].length; j++) {
                                if (grid[i][j] !== 0) {
                                    grid[i][j] = grid[i][j] * 10;
                                }
                            }
                        }
                        return grid;
                    }
    
                    setResultGrid(data[0].solution);
                    setGrid(multiplyDeclaredCellBy10(data[0].value));
                    setLoading(false);
                    setIsLoading(false);
                }
            });
        } catch (error) {
            console.error('An error occurred:', error);
            setLoading(false);
            setIsLoading(false);
            fetchSudokuBoard();
        }
    };
    

    React.useEffect(() => {
        setSelectedCell(null);
        fetchSudokuBoard();
    }, [refresh, value]);

    React.useEffect(() => {
        console.log(`Selected No: ${selectedNo}`);
        if (selectedCell != null && selectedCell.length === 2) {
            const newGrid = [...grid];
            newGrid[selectedCell[0]][selectedCell[1]] = selectedNo;
            setGrid(newGrid);
        }
    }, [selectedNo]);

    function resultGridSetter() {
        console.log("Grid");
        console.log(grid);
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (grid[i][j] >= 10) {
                    resultGrid[i][j] = grid[i][j];
                }
            }
        }
        console.log("Result Grid");
        console.log(resultGrid);
    }

    React.useEffect(() => {
        if (grid != null && grid.length > 0) {
            resultGridSetter();
            if (MatrixChecker(grid, resultGrid)) {
                console.log("Sudoku Solved");
                Alert.alert(
                    'Congratulations!',
                    'You have solved the Sudoku',
                    [
                        {
                            text: 'OK',
                            onPress: () => {
                                fetchSudokuBoard();
                            },
                        },
                    ],
                    { cancelable: false }
                );
            }
            
        }

    }, [grid]);

    const handleCellPress = (row: any, col: any) => {
        console.log(`Cell (${row}, ${col}) pressed`);
        setSelectedCell([row, col]);
    };

    if (loading) {
        return (
            <View style={[styles.loadingContainer, styles.horizontal]}>
                <ActivityIndicator size="large" color={themeColor} />
                <Text
                    style={[{ color: 'white', fontSize: 20 }, styles.horizontal]}
                >
                    Loading...This might take a while</Text>
            </View>

        )
    }

    return (
        <View style={[styles.container, { borderColor: themeColor }]}>
            {grid.map((row: any, rowIndex: any) => (
                <View key={rowIndex} style={styles.row}>
                    {row.map((cell: any, colIndex: any) => (
                        cell >= 10 ? (
                            <View
                                key={colIndex}
                                style={[
                                    styles.cell,
                                    colIndex % 3 === 2 ? { borderRightWidth: 2, borderRightColor: themeColor } : { borderRightWidth: 2, borderRightColor: 'white' },
                                    rowIndex % 3 === 2 ? { borderBottomWidth: 2, borderBottomColor: themeColor } : { borderBottomColor: 'white', borderBottomWidth: 2 },
                                ]}
                            >
                                <Text style={styles.cellText}>{cell / 10}</Text>
                            </View>
                        ) :
                            (<TouchableOpacity
                                key={colIndex}
                                style={[
                                    styles.cell,
                                    styles.emptyCell,
                                    colIndex % 3 === 2 ? { borderRightWidth: 2, borderRightColor: themeColor } : { borderRightWidth: 2, borderRightColor: 'white' },
                                    rowIndex % 3 === 2 ? { borderBottomWidth: 2, borderBottomColor: themeColor } : { borderBottomColor: 'white', borderBottomWidth: 2 },
                                ]}
                                onPress={() => handleCellPress(rowIndex, colIndex)}
                            >
                                <Text style={styles.cellText}>{cell == 0 ? ' ' : cell}</Text>
                            </TouchableOpacity>
                            )
                    ))}
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderWidth: 4,
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 42,
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyCell: {
        backgroundColor: '#575757',
    },
    cellText: {
        fontSize: 30,
    },
    horizontal: {
        padding: 10,
        margin: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default TableBox;

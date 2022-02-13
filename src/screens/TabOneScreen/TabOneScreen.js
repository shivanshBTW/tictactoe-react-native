import { useCallback, useState } from "react";
import { Button, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import useForceUpdate from "use-force-update";
import TabOneScreenStyles from "./TabOneScreenStyles";

const styles = StyleSheet.create(TabOneScreenStyles);

const n = 3; // for an n by n board
const emptyArrayJSON = JSON.stringify(Array.from(new Array(n)));
const fullArray = Array.from(new Array(n)).map((_, index) =>
  JSON.parse(emptyArrayJSON)
);

function TabOneScreen({ navigation }) {
  const forceUpdate = useForceUpdate();

  let [playStates, setPlayStates] = useState(fullArray);

  const handleCellClick = (rowIndex, columnIndex) => (event) => {
    console.log({ ...event });
    console.log({ ...event.target });
    console.log(rowIndex, columnIndex, playStates[rowIndex][columnIndex]);

    let tempPlayStates = playStates;
    tempPlayStates[rowIndex][columnIndex] = !playStates[rowIndex][columnIndex];

    console.log(rowIndex, columnIndex, tempPlayStates[rowIndex][columnIndex]);

    setPlayStates(tempPlayStates);
    forceUpdate();
  };

  console.log(playStates);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick TicTacToe</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.gameContainer}>
        {playStates.map((cellRows, index) => {
          return (
            <View style={styles.rowContainer} key={index}>
              {cellRows.map((cell, index2) => {
                console.log(cell);
                return (
                  <View style={styles.cellButtonContainer} key={index2}>
                    <Pressable
                      style={styles.cellButton}
                      onPress={handleCellClick(index, index2)}
                    >
                      <Text style={styles.cellButtonText}>{!!cell ? "X" : "O"}</Text>
                    </Pressable>
                  </View>
                );
              })}
            </View>
          );
        })}
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

export default TabOneScreen;

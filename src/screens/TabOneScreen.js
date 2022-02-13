import { useCallback, useState } from "react";
import { Button, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import useForceUpdate from "use-force-update";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  gameContainer: {
    // display: "flex",
    // flexDirection: "column",
    // alignItems: "center",
    // justifyContent: "center",
  },
  rowContainer: {
    // flex: 1,
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "center",
  },
  cellButtonContainer: {
    // flex: 1,
    padding: 10,
    // width:100
  },
  cellButton: {
    // flex: 1,
    // width: "100%",
    // height: 40,
    // alignItems: "center",
    // justifyContent: "center",
    // paddingVertical: 10,
    // paddingHorizontal: 1,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "lightblue",
    color: "black",
  },
  cellButtonText: {
    marginVertical: 10,
    // marginHorizontal: 30,
    fontSize: 60,
    width: 80,
    textAlign: "center",
  },
});

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
    </View>
  );
}

export default TabOneScreen;

import { Button, Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";

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
    marginHorizontal: 30,
    fontSize: 60,
  },
});

function TabOneScreen({ navigation }) {
  let n = 3; // for an n by n board

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick TicTacToe</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View style={styles.gameContainer}>
        {Array.from(new Array(n)).map((_, index) => {
          return (
            <View style={styles.rowContainer} key={index}>
              {Array.from(new Array(n)).map((__, index2) => {
                return (
                  <View style={styles.cellButtonContainer} key={index2}>
                    <View style={styles.cellButton}>
                      <Text style={styles.cellButtonText}>X</Text>
                    </View>
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

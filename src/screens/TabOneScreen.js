import { StyleSheet } from "react-native";
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
});

function TabOneScreen({ navigation }) {
  let columnCount = 3;
  let rowCount = 3;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quick TicTacToe</Text>
      <View style={styles.gameContainer}>
        {Array.from(new Array(rowCount)).map((_, index) => {
          return (
            <View style={styles.rowContainer}>
              {Array.from(new Array(columnCount)).map((__, index2) => {
                return (
                  <View style={styles.cell}>
                    <Text>GG</Text>
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

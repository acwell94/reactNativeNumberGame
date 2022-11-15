import { StyleSheet, Text, View } from "react-native";
import Color from "../../constants/color";

function NumberContainer({ children }) {
  return (
    <View style={style.container}>
      <Text style={style.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const style = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderRadius: 8,
    borderColor: Color.Primary700,
    padding: 24,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Color.Primary600,
    fontSize: 24,
  },
});

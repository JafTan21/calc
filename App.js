import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CalcButton from './components/Button';
import { useState } from 'react';

export default function App() {
  const [num1, setNum1] = useState("0")
  const [num2, setNum2] = useState("")
  const [operator, setOperator] = useState("")
  const [result, setResult] = useState("")

  const reset = () => {
    setNum1("0");
    setNum2("");
    setOperator("");
    setResult("");
  }

  const onOperator = (op) => {
    if (op === "C") {
      reset();
      return;
    }

    if (num1 === "0") return;

    switch (op) {
      case "=":
        setResult(eval(`${num1}${operator}${num2}`))
        break;

      default:
        setOperator(op);
        break;
    }
  }

  const onPress = (num) => {

    let setter;
    if (!operator) setter = setNum1;
    else setter = setNum2;

    setter(prev => Number(prev + num))
  }

  return (
    <View style={styles.container}>

      <View style={{
        backgroundColor: "black",
        width: "100%",
        padding: 20,
      }}>
        <Text style={{ color: "white", textAlign: "right", fontSize: 24 }}>
          {
            result ? `=${result}` : `${num1}${operator}${num2}`
          }
        </Text>
      </View>

      <View style={styles.numbers}>
        <View style={styles.row}>
          <CalcButton num={"1"} onPress={onPress} />
          <CalcButton num={"2"} onPress={onPress} />
          <CalcButton num={"3"} onPress={onPress} />
          <CalcButton num={"+"} onPress={onOperator} styles={{ backgroundColor: "green" }} />
        </View>

        <View style={styles.row}>
          <CalcButton num={"4"} onPress={onPress} />
          <CalcButton num={"5"} onPress={onPress} />
          <CalcButton num={"6"} onPress={onPress} />
          <CalcButton num={"-"} onPress={onOperator} styles={{ backgroundColor: "green" }} />
        </View>

        <View style={styles.row}>
          <CalcButton num={"7"} onPress={onPress} />
          <CalcButton num={"8"} onPress={onPress} />
          <CalcButton num={"9"} onPress={onPress} />
          <CalcButton num={"*"} onPress={onOperator} styles={{ backgroundColor: "green" }} />
        </View>

        <View style={styles.row}>
          <CalcButton num={"C"} onPress={onOperator} styles={{ backgroundColor: "red" }} />
          <CalcButton num={"0"} onPress={onPress} />
          <CalcButton num={"="} onPress={onOperator} styles={{ backgroundColor: "blue" }} />
          <CalcButton num={"/"} onPress={onOperator} styles={{ backgroundColor: "green" }} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  numbers: {
    padding: 20,
    backgroundColor: "#e9e9e9"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: 20
  }
});

import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import React from "react";

export default function CalcButton({ num, styles, onPress }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "black",
        padding: 20,
        borderRadius: 50,
        ...styles,
      }}
      onPress={(e) => onPress(num)}
    >
      <Text style={{ color: "white", fontSize: 22 }}>{num}</Text>
    </TouchableOpacity>
  );
}

import React from "react";
import { View, StyleSheet, Text } from "react-native";

const PreviousOrders = () => {
  return (
    <View style={styles.center}>
      <Text>This is the PreviousOrders screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default PreviousOrders;
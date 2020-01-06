import React from "react";
import { StyleSheet, View } from "react-native";
import { Value, set, useCode } from "react-native-reanimated";

import { timing } from "react-native-redash";
import { R1, R2, R3 } from "./Constants";
import Ring from "./Ring";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000001"
  }
});

export default () => {
  const progress = new Value(0);
  useCode(() => set(progress, timing({ duration: 1000 })), [progress]);
  return (
    <View style={styles.container}>
      {[R3, R2, R1].map((ring, i) => (
        <Ring key={i} {...{ ring, progress }} />
      ))}
    </View>
  );
};

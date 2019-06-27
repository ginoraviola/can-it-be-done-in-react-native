import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ChannelIconProps {
  name: string;
  radius: number;
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold"
  }
});

export default ({ name, radius }: ChannelIconProps) => {
  return (
    <View
      style={{
        width: radius * 2,
        height: radius * 2,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View
        style={{
          width: (radius - 8) * 2,
          height: (radius - 8) * 2,
          borderRadius: radius - 8,
          backgroundColor: "#919293",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};
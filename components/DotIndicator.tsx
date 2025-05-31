import React from "react";
import { StyleSheet, View } from "react-native";

type Props = {
  total: number;
  currentIndex: number;
};

export default function DotIndicator({ total, currentIndex }: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === currentIndex ? styles.activeDot : styles.inactiveDot,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#FF6347",
  },
  inactiveDot: {
    backgroundColor: "#D3D3D3",
  },
});

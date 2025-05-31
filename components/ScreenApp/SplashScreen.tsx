// splashscreen.navigation.tsx
import { RootStackParamList } from "@/types/splashscreen.navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

type SplashScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SplashScreen"
>;

type Props = {
  navigation: SplashScreenNavigationProp;
};

export default function SplashScreen({ navigation }: Props) {
  const scaleAnim = useRef(new Animated.Value(0)).current;
  const opacityAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 500,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      navigation.replace("OnBoarding01");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("@/assets/images/nitoab_food_logo.png")} // đổi đường dẫn logo cho đúng với bạn
        style={[
          styles.logo,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

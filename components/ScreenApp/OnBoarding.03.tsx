import type { RootStackParamList } from "@/types/splashscreen.navigation";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DotIndicator from "../DotIndicator";

export default function OnBoarding03() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/onboarding3.png")}
        style={styles.imageBox}
        resizeMode="cover"
      />

      <Text style={styles.textcontent}>Free delivery offers</Text>

      <Text style={styles.descriptionText}>
        Get all your loved foods in one once place, you just place the order we
        do the rest
      </Text>

      <View style={styles.bottomSection}>
        <DotIndicator total={3} currentIndex={2} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text style={styles.buttonNext}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageBox: {
    width: 327,
    height: 282,
    borderRadius: 12,
  },
  textcontent: {
    marginTop: 40,
    fontFamily: "Sen",
    fontWeight: "800",
    fontSize: 24,
    lineHeight: 29,
    textAlign: "center",
    color: "#32343E",
  },
  descriptionText: {
    marginTop: 16,
    width: 324,
    fontFamily: "Sen",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    color: "#646982",
  },
  bottomSection: {
    marginTop: "auto",
    alignItems: "center",
    width: "100%",
    marginBottom: 40,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#FF6347",
    borderRadius: 16,
    width: 327,
    height: 62,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNext: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

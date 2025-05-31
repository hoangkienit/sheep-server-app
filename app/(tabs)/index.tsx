import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// import HomeScreen from '@/components/ScreenApp/HomeScreen';
import HomeScreen from "@/components/ScreenApp/HomeScreen";
import OnBoarding01 from "@/components/ScreenApp/OnBoarding.01";
import OnBoarding02 from "@/components/ScreenApp/OnBoarding.02";
import OnBoarding03 from "@/components/ScreenApp/OnBoarding.03";
import SplashScreen from "../../components/ScreenApp/SplashScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnBoarding01" component={OnBoarding01} />
      <Stack.Screen name="OnBoarding02" component={OnBoarding02} />
      <Stack.Screen name="OnBoarding03" component={OnBoarding03} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

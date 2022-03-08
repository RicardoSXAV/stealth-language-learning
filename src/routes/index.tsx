import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import { RootStackParamList } from "./types";
import { COLORS } from "../constants/colors";
import ExerciseView from "../modules/exercise/pages/ExerciseView";

export default function Routes() {
  const Stack = createStackNavigator<RootStackParamList>();

  const customTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLORS.backgroundLightBlue,
    },
  };

  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ExerciseView" component={ExerciseView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

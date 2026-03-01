// biome-ignore lint/performance/noNamespaceImport: need to import Haptics as a namespace
import * as Haptics from "expo-haptics";
import { SymbolView } from "expo-symbols";
import { useThemeColor } from "heroui-native";
import { Pressable } from "react-native";
import Animated, { FadeOut, ZoomIn } from "react-native-reanimated";

import { useAppTheme } from "@/contexts/app-theme-context";

export function ThemeToggle() {
  const { toggleTheme, isLight } = useAppTheme();
  const foregroundColor = useThemeColor("foreground");

  return (
    <Pressable
      className="px-2.5"
      onPress={() => {
        if (process.env.EXPO_OS === "ios") {
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }
        toggleTheme();
      }}
    >
      {isLight ? (
        <Animated.View entering={ZoomIn} exiting={FadeOut} key="moon">
          <SymbolView
            name={{ ios: "moon.fill", android: "dark_mode", web: "dark_mode" }}
            size={20}
            tintColor={foregroundColor}
          />
        </Animated.View>
      ) : (
        <Animated.View entering={ZoomIn} exiting={FadeOut} key="sun">
          <SymbolView
            name={{
              ios: "sun.max.fill",
              android: "light_mode",
              web: "light_mode",
            }}
            size={20}
            tintColor={foregroundColor}
          />
        </Animated.View>
      )}
    </Pressable>
  );
}

import {
  TabList,
  TabSlot,
  Tabs,
  TabTrigger,
  type TabTriggerSlotProps,
} from "expo-router/ui";
import { useThemeColor } from "heroui-native";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={styles.slot} />
      <TabList style={styles.tabList}>
        <TabTrigger asChild href="/(drawer)/(tabs)/" name="index">
          <TabButton>Home</TabButton>
        </TabTrigger>
        <TabTrigger asChild href="/(drawer)/(tabs)/two" name="two">
          <TabButton>Explore</TabButton>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  const foregroundColor = useThemeColor("foreground");
  const mutedColor = useThemeColor("muted");

  return (
    <Pressable {...props}>
      <View style={[styles.tabButton, isFocused && styles.tabButtonFocused]}>
        <Text style={{ color: isFocused ? foregroundColor : mutedColor }}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  slot: {
    height: "100%",
  },
  tabList: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
    gap: 4,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  tabButtonFocused: {
    backgroundColor: "rgba(128, 128, 128, 0.1)",
  },
});

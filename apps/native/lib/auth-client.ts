import { expoClient } from "@better-auth/expo/client";
import {
  convexClient,
  crossDomainClient,
} from "@convex-dev/better-auth/client/plugins";
import { env } from "@gimmy/env/native";
import { createAuthClient } from "better-auth/react";
import Constants from "expo-constants";
// biome-ignore lint/performance/noNamespaceImport: need to import SecureStore as a namespace
import * as SecureStore from "expo-secure-store";
import { Platform } from "react-native";

export const authClient = createAuthClient({
  baseURL: env.EXPO_PUBLIC_CONVEX_SITE_URL,
  plugins: [
    convexClient(),
    Platform.OS === "web"
      ? crossDomainClient()
      : expoClient({
          scheme: Constants.expoConfig?.scheme as string,
          storagePrefix: Constants.expoConfig?.scheme as string,
          storage: SecureStore,
        }),
  ],
});

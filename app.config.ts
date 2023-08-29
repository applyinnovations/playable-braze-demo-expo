import { ExpoConfig, ConfigContext } from "@expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "playable-braze-demo-expo",
  owner: "applyinnovations",
  slug: "playable-braze-demo-expo",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.applyinnovations.playablebrazedemo",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
    permissions: [
      "android.permission.ACCESS_NETWORK_STATE",
      "android.permission.INTERNET",
    ],
    package: "com.applyinnovations.playablebrazedemo",
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    [
      "@braze/expo-plugin",
      {
        androidApiKey: process.env.BRAZE_ANDROID_API_KEY,
        iosApiKey: process.env.BRAZE_IOS_API_KEY,
        baseUrl: process.env.BRAZE_SDK_ENDPOINT,
        sessionTimeout: 60,
        enableGeofence: false,
        enableBrazeIosPush: false,
        enableFirebaseCloudMessaging: false,
        firebaseCloudMessagingSenderId: "YOUR-FCM-SENDER-ID",
        androidHandlePushDeepLinksAutomatically: true,
        enableSdkAuthentication: false,
        logLevel: 0,
        minimumTriggerIntervalInSeconds: 0,
        enableAutomaticLocationCollection: false,
        enableAutomaticGeofenceRequests: false,
        dismissModalOnOutsideTap: true,
        androidPushNotificationHtmlRenderingEnabled: true,
        androidNotificationAccentColor: "#ff3344",
        androidNotificationLargeIcon: "@drawable/custom_app_large_icon",
        androidNotificationSmallIcon: "@drawable/custom_app_small_icon",
      },
    ],
  ],
  extra: {
    eas: {
      projectId: "7cd7923a-04b1-49e0-8ff7-d051c6eba5a5",
    },
  },
});

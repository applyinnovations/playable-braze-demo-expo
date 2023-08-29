import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Braze from "@braze/react-native-sdk";
import { useEffect, useState } from "react";

export default function App() {
  const [id, setId] = useState<string>();
  useEffect(() => {
    Braze.getDeviceId((error, deviceId) => {
      if (error) console.error(error);
      if (deviceId) Braze.changeUser(deviceId);
      if (deviceId) setId(deviceId);
    });
  }, []);
  return (
    <View style={styles.container}>
      <Text>{`Device (user) id\n${id}`}</Text>
      <TouchableOpacity
        style={{
          width: 100,
          paddingVertical: 10,
          borderWidth: 1,
          padding: 10,
          borderColor: "black",
          borderRadius: 10,
        }}
        onPress={() => {
          Braze.launchContentCards();
          Braze.getContentCards().then(console.log).catch(console.error);
        }}
      >
        <Text>Open content cards!</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});

import React from 'react';
import { View } from 'react-native';
import { Stack } from 'expo-router';
import ActionBar from '../components/ActionBar';

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <ActionBar />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(app)" />
      </Stack>
    </View>
  );
}

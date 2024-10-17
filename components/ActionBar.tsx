import { usePathname } from 'expo-router';
import React from 'react';
import { View, Text, SafeAreaView, Platform } from 'react-native';

import InstallPWA from './InstallPWA';
import WebMenu from './WebMenu';

export default function ActionBar() {
  const pathname = usePathname();
  const isWeb = Platform.OS === 'web';
  const isLoginScreen = pathname === '/login';

  return (
    <SafeAreaView className="bg-[#29abe2]">
      <View className="flex-row items-center justify-between px-4 py-3">
        <View>
          <Text className="text-2xl font-bold text-[#8cc63f]">SeCAL</Text>
          <Text className="text-sm text-white">Calculadora de MAB</Text>
        </View>
        <InstallPWA />
      </View>
      {isWeb && !isLoginScreen && <WebMenu />}
    </SafeAreaView>
  );
}

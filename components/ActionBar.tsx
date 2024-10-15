import React from 'react';
import { View, Text, SafeAreaView, Platform, useWindowDimensions } from 'react-native';
import { usePathname } from 'expo-router';
import WebMenu from './WebMenu';
import { appColors } from '../utils/screenConfig';

export default function ActionBar() {
  const { width } = useWindowDimensions();
  const pathname = usePathname();
  const isWeb = width >= 768;
  const isLoginScreen = pathname.startsWith('/(auth)');

  if (isLoginScreen) {
    return null;
  }

  return (
    <SafeAreaView style={{ backgroundColor: appColors.primary }}>
      <View className={`px-4 py-3 ${Platform.OS === 'android' ? 'pt-2' : ''} flex justify-center items-center`}>
        <Text style={{ color: appColors.secondary, fontSize: 24, fontWeight: 'bold' }}>SeCAL</Text>
        <Text style={{ color: 'white', fontSize: 14 }}>Calculadora de MAB</Text>
      </View>
      {isWeb && <WebMenu />}
    </SafeAreaView>
  );
}

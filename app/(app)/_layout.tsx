import React from 'react';
import { Tabs, Slot } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useWindowDimensions } from 'react-native';
import { screenConfig } from '../../utils/screenConfig';

export default function AppLayout() {
  const { width } = useWindowDimensions();
  const isWeb = width >= 768;

  if (isWeb) {
    return <Slot />;
  }

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: screenConfig[route.name as keyof typeof screenConfig]?.color || '#29abe2',
        tabBarInactiveTintColor: '#9ca3af',
        tabBarStyle: { paddingBottom: 5 },
        animation: 'fade',
      })}
    >
      <Tabs.Screen
        name="calculator"
        options={{
          title: 'Calculadora',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="protocols"
        options={{
          title: 'Protocolos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="technical-sheets"
        options={{
          title: 'Fichas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="clinical-cases"
        options={{
          title: 'Casos',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="medical" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

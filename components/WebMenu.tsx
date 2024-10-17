import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { screenConfig } from '../utils/screenConfig';

const menuItems = [
  { name: 'Tasa de Retención', path: '/calculator', key: 'calculator' },
  { name: 'Protocolo de uso', path: '/protocols', key: 'protocols' },
  { name: 'Casos Clínicos', path: '/clinical-cases', key: 'clinicalCases' },
  { name: 'Documentación', path: '/technical-sheets', key: 'technicalSheets' },
];

export default function WebMenu() {
  const router = useRouter();

  const currentPath = usePathname();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e5e7eb',
      }}>
      {menuItems.map((item) => {
        const isActive = currentPath === item.path;
        const activeColor = screenConfig[item.key as keyof typeof screenConfig].color;

        return (
          <Pressable
            key={item.path}
            onPress={() => router.push(item.path as never)}
            style={{
              paddingHorizontal: 16,
              paddingVertical: 8,
              borderBottomWidth: isActive ? 2 : 0,
              borderBottomColor: isActive ? activeColor : 'transparent',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? activeColor : '#4b5563',
              }}>
              {item.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

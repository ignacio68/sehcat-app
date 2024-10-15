import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, useWindowDimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function Login() {
  const [code, setCode] = useState('');
  const router = useRouter();
  const { width } = useWindowDimensions();

  const isMobile = width < 768;

  const handleAuth = async () => {
    if (code === '123456') {
      await AsyncStorage.setItem('isAuthenticated', 'true');
      router.replace('/(app)/calculator');
    } else {
      console.log('Código incorrecto');
      setCode('');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className={`w-full ${isMobile ? 'px-5' : 'max-w-md'}`}>

        <TextInput
          className="w-full border border-gray-300 p-3 rounded-lg mb-4"
          value={code}
          onChangeText={setCode}
          placeholder="Ingrese el código"
          inputMode="numeric"
        />
        <Pressable 
          onPress={handleAuth}
          className="w-full bg-blue-500 p-4 rounded-lg"
        >
          <Text className="text-white text-center font-bold text-lg">Autenticar</Text>
        </Pressable>
      </View>
    </View>
  );
}

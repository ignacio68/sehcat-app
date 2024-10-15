import "../global.css";
import { Href, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useRouter, useSegments } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Layout() {
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await AsyncStorage.getItem('isAuthenticated');
      const inAuthGroup = segments[0]?.startsWith('(auth)');

      if (isAuthenticated === 'true' && inAuthGroup) {
        router.replace('/(app)/calculator' as Href);
      } else if (isAuthenticated !== 'true' && !inAuthGroup) {
        router.replace('/(auth)/login' as Href);
      }
    };

    checkAuth();
  }, [segments]);

  return <Stack />;
}
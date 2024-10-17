import React, { useState, useEffect } from 'react';
import { Pressable, Text, Platform, Linking } from 'react-native';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const isDevice = Platform.OS === 'android' || Platform.OS === 'ios';

  useEffect(() => {
    if (!isDevice) {
      const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setIsInstallable(true);
      };

      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as any);

      return () => {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as any);
      };
    }
  }, []);

  const handleInstallClick = async () => {
    if (!isDevice) {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
          console.log('User accepted the install prompt');
          setIsInstallable(false);
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      } else {
        console.log('The app is already installed or not installable');
      }
    } else if (Platform.OS === 'android') {
      Linking.openURL('https://play.google.com/store/apps/details?id=com.inyeccion.sehcat&hl=es');
    } else if (Platform.OS === 'ios') {
      Linking.openURL(
        'https://apps.apple.com/es/app/secal-calculadora-de-mab/id1146371226?l=en&mt=8'
      );
    }
  };

  let buttonText = 'Instalar';
  if (Platform.OS === 'android') {
    buttonText = 'Obtener en Google Play';
  } else if (Platform.OS === 'ios') {
    buttonText = 'Obtener en App Store';
  }

  // No mostrar el botón en web si la app no es instalable
  if (Platform.OS === 'web' && !isInstallable) {
    return null;
  }

  return (
    <Pressable onPress={handleInstallClick} className="rounded bg-[#8cc63f] px-3 py-1.5">
      <Text className="text-sm font-bold text-[#29abe2]">{buttonText}</Text>
    </Pressable>
  );
}

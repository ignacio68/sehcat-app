import React from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import { screenConfig } from '../../utils/screenConfig';

export default function Protocols() {
    const { width } = useWindowDimensions();
    const { color, title } = screenConfig.protocols;

    // Función para determinar el ancho máximo y el padding
    const getLayoutStyle = () => {
        if (width < 768) return 'w-full px-4';
        if (width < 1024) return 'w-4/5 max-w-3xl mx-auto';
        return 'w-3/4 max-w-5xl mx-auto';
    };

    // Función para determinar el tamaño de fuente del título
    const getTitleStyle = () => {
        if (width < 768) return 'text-2xl';
        if (width < 1024) return 'text-3xl';
        return 'text-4xl';
    };

    // Función para determinar el tamaño de fuente del contenido
    const getContentStyle = () => {
        if (width < 768) return 'text-base';
        if (width < 1024) return 'text-lg';
        return 'text-xl';
    };

    return (
        <View className="flex-1 bg-white">
            <View className={`flex-1 ${getLayoutStyle()} mb-4`}>
                <View style={{ backgroundColor: color }} className="rounded-t-lg px-4 py-2 mt-4">
                    <Text className={`font-bold text-white ${getTitleStyle()}`}>{title}</Text>
                </View>
                <View 
                    style={{ borderColor: color }} 
                    className="flex-1 bg-white border-2 border-t-0 rounded-b-lg"
                >
                    <ScrollView className="p-4">
                        {/* Aquí irá el contenido de los protocolos */}
                        <Text className={getContentStyle()}>Contenido de los protocolos...</Text>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

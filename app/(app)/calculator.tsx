import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import { screenConfig } from '../../utils/screenConfig';

export default function CalculatorScreen() {
    const { width } = useWindowDimensions();
    const { color, title } = screenConfig.calculator;

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
                        <Text className={`${getContentStyle()} font-bold text-blue-600 mb-3`}>Día 1</Text>
                        <View className="flex-row justify-between mb-2">
                            <Text className={`${getContentStyle()} font-semibold text-gray-600`}>Anterior</Text>
                            <Text className={`${getContentStyle()} font-semibold text-gray-600`}>Posterior</Text>
                        </View>
                        <View className="mb-4">
                            <Text className={`${getContentStyle()} font-bold text-gray-700 mb-1`}>FONDO PRE</Text>
                            <View className="flex-row justify-between">
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                            </View>
                        </View>
                        <View className="mb-4">
                            <Text className={`${getContentStyle()} font-bold text-gray-700 mb-1`}>ABDOMEN</Text>
                            <View className="flex-row justify-between">
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                            </View>
                        </View>
                        <View className="mb-4">
                            <Text className={`${getContentStyle()} font-bold text-gray-700 mb-1`}>FONDO POST</Text>
                            <View className="flex-row justify-between">
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                            </View>
                        </View>
                        <View style={{ backgroundColor: color }} className="p-3 mb-4 rounded">
                            <Text className={`${getContentStyle()} text-white font-bold`}>ACT. ABDOMINAL</Text>
                            <Text className={`${getTitleStyle()} text-white text-right font-bold`}>0</Text>
                        </View>
                        <TouchableOpacity 
                            style={{ backgroundColor: color }}
                            className="p-3 rounded-lg mb-6"
                        >
                            <Text className={`${getContentStyle()} text-white text-center font-bold`}>Calcular el 4º día</Text>
                        </TouchableOpacity>
                        
                        <Text className={`${getContentStyle()} font-bold text-blue-600 mb-3`}>Día 7</Text>
                        <View className="flex-row justify-between mb-2">
                            <Text className={`${getContentStyle()} font-semibold text-gray-600`}>Anterior</Text>
                            <Text className={`${getContentStyle()} font-semibold text-gray-600`}>Posterior</Text>
                        </View>
                        <View className="mb-4">
                            <Text className={`${getContentStyle()} font-bold text-gray-700 mb-1`}>FONDO PRE</Text>
                            <View className="flex-row justify-between">
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                            </View>
                        </View>
                        <View className="mb-4">
                            <Text className={`${getContentStyle()} font-bold text-gray-700 mb-1`}>ABDOMEN</Text>
                            <View className="flex-row justify-between">
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                                <TextInput className={`border w-5/12 p-2 text-blue-600 text-center rounded ${getContentStyle()}`} placeholder="0" keyboardType="numeric" />
                            </View>
                        </View>
                        <View className="flex-row justify-between mb-6">
                            <TouchableOpacity style={{ backgroundColor: color }} className="w-5/12 p-3 rounded-lg">
                                <Text className={`${getContentStyle()} text-white text-center font-bold`}>Borrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ backgroundColor: color }} className="w-5/12 p-3 rounded-lg">
                                <Text className={`${getContentStyle()} text-white text-center font-bold`}>Enviar</Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{ backgroundColor: color }} className="p-4 rounded-lg">
                            <Text className={`${getContentStyle()} text-white text-center font-bold mb-2`}>Retención al día 7</Text>
                            <Text className={`${getTitleStyle()} text-white text-center font-bold mb-2`}>0%</Text>
                            <Text className="text-white text-center text-sm">Una retención inferior al 10-15% a los 7 días puede ser considerada anormal y sugiere MAB 1,2</Text>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
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
        <View style={{ backgroundColor: color }} className="mt-4 rounded-t-lg px-4 py-2">
          <Text className={`font-bold text-white ${getTitleStyle()}`}>{title}</Text>
        </View>
        <View
          style={{ borderColor: color }}
          className="flex-1 rounded-b-lg border-2 border-t-0 bg-white">
          <ScrollView className="p-4">
            <Text className={`${getContentStyle()} mb-3 font-bold text-blue-600`}>Día 1</Text>
            <View className="mb-2 flex-row justify-between">
              <Text className={`${getContentStyle()} font-semibold text-gray-600`}>Anterior</Text>
              <Text className={`${getContentStyle()} font-semibold text-gray-600`}>Posterior</Text>
            </View>
            <View className="mb-4">
              <Text className={`${getContentStyle()} mb-1 font-bold text-gray-700`}>FONDO PRE</Text>
              <View className="flex-row justify-between">
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View className="mb-4">
              <Text className={`${getContentStyle()} mb-1 font-bold text-gray-700`}>ABDOMEN</Text>
              <View className="flex-row justify-between">
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View className="mb-4">
              <Text className={`${getContentStyle()} mb-1 font-bold text-gray-700`}>
                FONDO POST
              </Text>
              <View className="flex-row justify-between">
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View style={{ backgroundColor: color }} className="mb-4 rounded p-3">
              <Text className={`${getContentStyle()} font-bold text-white`}>ACT. ABDOMINAL</Text>
              <Text className={`${getTitleStyle()} text-right font-bold text-white`}>0</Text>
            </View>
            <TouchableOpacity style={{ backgroundColor: color }} className="mb-6 rounded-lg p-3">
              <Text className={`${getContentStyle()} text-center font-bold text-white`}>
                Calcular el 4º día
              </Text>
            </TouchableOpacity>

            <Text className={`${getContentStyle()} mb-3 font-bold text-blue-600`}>Día 7</Text>
            <View className="mb-2 flex-row justify-between">
              <Text className={`${getContentStyle()} font-semibold text-gray-600`}>Anterior</Text>
              <Text className={`${getContentStyle()} font-semibold text-gray-600`}>Posterior</Text>
            </View>
            <View className="mb-4">
              <Text className={`${getContentStyle()} mb-1 font-bold text-gray-700`}>FONDO PRE</Text>
              <View className="flex-row justify-between">
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View className="mb-4">
              <Text className={`${getContentStyle()} mb-1 font-bold text-gray-700`}>ABDOMEN</Text>
              <View className="flex-row justify-between">
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
                <TextInput
                  className={`w-5/12 rounded border p-2 text-center text-blue-600 ${getContentStyle()}`}
                  placeholder="0"
                  keyboardType="numeric"
                />
              </View>
            </View>
            <View className="mb-6 flex-row justify-between">
              <TouchableOpacity
                style={{ backgroundColor: color }}
                className="w-5/12 rounded-lg p-3">
                <Text className={`${getContentStyle()} text-center font-bold text-white`}>
                  Borrar
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: color }}
                className="w-5/12 rounded-lg p-3">
                <Text className={`${getContentStyle()} text-center font-bold text-white`}>
                  Enviar
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: color }} className="rounded-lg p-4">
              <Text className={`${getContentStyle()} mb-2 text-center font-bold text-white`}>
                Retención al día 7
              </Text>
              <Text className={`${getTitleStyle()} mb-2 text-center font-bold text-white`}>0%</Text>
              <Text className="text-center text-sm text-white">
                Una retención inferior al 10-15% a los 7 días puede ser considerada anormal y
                sugiere MAB 1,2
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

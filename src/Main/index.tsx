import React from 'react';
import { Home } from '../screens/Home';
import { Info } from '../screens/Info';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/RootStackParamList';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';


type Main = NativeStackScreenProps<RootStackParamList, 'Main'>;


const Stack = createStackNavigator<RootStackParamList>();

export function Main() {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>

			<Stack.Screen
				name="Home"
				component={Home}
			/>

			<Stack.Screen
				name="Info"
				component={Info}
			/>


		</Stack.Navigator>
	);
}

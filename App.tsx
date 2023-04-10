import { Main } from './src/Main';
import { NavigationContainer } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export default function App() {
//config do toast
	const toastConfig  ={
		error: (props) => (
			<ErrorToast
				{...props}
				style={{ borderLeftColor: 'red', backgroundColor: '#eee', width: '90%' }}

				contentContainerStyle={{ paddingLeft: 20, flexGrow: 1}}

				text1Style={{
					fontSize: 20,
					fontWeight: '500'
				}}
				text2Style={{
					fontSize: 12,
					fontWeight: '400'
				}}
			/>
		),
		success: (props) => (
			<BaseToast
				{...props}
				style={{ borderLeftColor: 'green', backgroundColor: '#eee', width: '90%' }}

				contentContainerStyle={{ paddingLeft: 20, flexGrow: 1}}

				text1Style={{
					fontSize: 20,
					fontWeight: '500'
				}}
				text2Style={{
					fontSize: 12,
					fontWeight: '400'
				}}
			/>
		),
	};

	NavigationBar.setBackgroundColorAsync('#000');
	return (
		<NavigationContainer>
			<Main/>
			<Toast config={toastConfig}/>
		</NavigationContainer>
	);
}

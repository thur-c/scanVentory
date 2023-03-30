import { Main } from './src/Main';
import { NavigationContainer } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';


export default function App() {

	NavigationBar.setBackgroundColorAsync('#000');
	return (
		<NavigationContainer>
			<Main/>
		</NavigationContainer>
	);
}

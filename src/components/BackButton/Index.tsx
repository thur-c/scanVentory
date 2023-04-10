import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ButtonBack } from './styles';

export default function BackButton({onPress}){
	return(
		<SafeAreaView style={{backgroundColor: '#000'}}>
			<ButtonBack onPress={onPress}>
				<Ionicons name='arrow-back-sharp' size={50} color="#000"></Ionicons>
			</ButtonBack>
		</SafeAreaView>
	);
}

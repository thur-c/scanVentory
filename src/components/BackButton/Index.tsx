import { Ionicons } from '@expo/vector-icons';
import { ButtonBack } from './styles';

export default function BackButton({onPress}){
	return(
		<ButtonBack onPress={onPress}>
			<Ionicons name='arrow-back-sharp' size={65} color="#fff"></Ionicons>
		</ButtonBack>
	);
}

import React, { useEffect, useState } from 'react';
import { Image, Text } from 'react-native';
import { ModalCartao } from '../../components/Modal/Index';
import { BaseButton, MainContainer, TextBtn, MainText} from './styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/RootStackParamList';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


type Home = NativeStackScreenProps<RootStackParamList, 'Home'>;


export function Home({navigation}: Home){
	const [isModalVisible, setIsModalVisible] = useState(false);


	function redirect(){
		navigation.navigate('Info');
	}

	function handleModal() {
		setIsModalVisible(true);
	}
	return(
		<>
			<MainContainer>
				{/* <Ionicons name='file-tray-full-outline' size={100} color={'white'}></Ionicons> */}

				<Animatable.View animation="fadeInDownBig" duration={1500} delay={1000} style={{alignItems: 'center'}}>
					<Image source={require('../../assets/gifFolder.png')} style={{width: 120, height: 120}}></Image>
					<MainText>ScanVentory</MainText>
				</Animatable.View>

				<Animatable.View animation="fadeInUpBig" duration={1500} delay={1000}>
					<BaseButton onPress={handleModal}>
						<TextBtn>Scanear dispositivo </TextBtn>
						<Ionicons name="qr-code-outline" size={40} />
					</BaseButton>

					<BaseButton>
						<TextBtn>Pesquisar </TextBtn>
						<Ionicons name="md-search-sharp" size={40} />
					</BaseButton>

					<BaseButton>
						<TextBtn>Cadastrar </TextBtn>
						<Ionicons name="save-outline" size={40} />
					</BaseButton>
				</Animatable.View>

			</MainContainer>

			<ModalCartao
				redirect={()=>redirect()}
				visible={isModalVisible}
				onClose={() => setIsModalVisible(false)}
			></ModalCartao>

		</>
	);
}

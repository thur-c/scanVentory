import React, { useEffect, useState } from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import { ModalCartao } from '../../components/Modal/Index';
import { BaseButton, MainContainer, TextBtn, MainText, styles} from './styles';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/RootStackParamList';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


type Home = NativeStackScreenProps<RootStackParamList, 'Home'>;


export function Home({navigation}: Home){
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [changeScreen, setchangeScreen] = useState(1);


	function redirectInfo(){
		navigation.navigate('Info');
	}

	function redirectChamado(){
		navigation.navigate('Chamado');
	}

	function handleModalInfo(){
		setchangeScreen(1);
		setIsModalVisible(true);
	}
	function handleModalChamado(){
		setchangeScreen(2);
		setIsModalVisible(true);
	}
	return(
		<>
			<MainContainer>
				{/* <Ionicons name='file-tray-full-outline' size={100} color={'white'}></Ionicons> */}

				<Animatable.View animation="fadeInDownBig" duration={1500} delay={1000} style={{alignItems: 'center'}}>
					<Image source={require('../../assets/gifs/gifFolder.png')}

						style={{width: 120, height: 120}}></Image>
					<MainText >ScanVentory</MainText>
				</Animatable.View>

				<Animatable.View animation="fadeInUpBig" duration={1500} delay={1000}>

					<BaseButton style={styles.shadow}
						onPress={()=>  navigation.navigate('Info')}>
						<TextBtn>Scanear dispositivo </TextBtn>
						<Ionicons name="qr-code-outline" size={40} />
					</BaseButton>

					<BaseButton	style={styles.shadow} onPress={() =>handleModalChamado()}>
						<TextBtn>Abrir Chamado </TextBtn>
						<Ionicons name="construct-outline" size={40} />
					</BaseButton>

					{/* <BaseButton onPress={()=>redirect()}>
						<TextBtn>Cadastrar </TextBtn>
						<Ionicons name="save-outline" size={40} />
					</BaseButton> */}

				</Animatable.View>

			</MainContainer>

			{changeScreen === 1 &&
        <ModalCartao redirect={()=>redirectInfo()} visible={isModalVisible} onClose={() => setIsModalVisible(false)}/>}

			{changeScreen === 2 &&
        <ModalCartao	redirect={()=>redirectChamado()} visible={isModalVisible}	onClose={() => setIsModalVisible(false)}/>}
		</>
	);
}


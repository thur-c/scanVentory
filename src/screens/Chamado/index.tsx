/* eslint-disable no-mixed-spaces-and-tabs */
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../@types/RootStackParamList';
import DropDown from '../../components/DropDown';
import {  ButtonChamado, HeaderView, InputView, MainContainer, MainText, TextButton } from './styles';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../components/BackButton/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Input from '../../components/Input';

type Chamado = NativeStackScreenProps<RootStackParamList, 'Chamado'>;


const chamado = {
	status:['Selecione', 'Ativo', 'Pendente', 'Andamento'],
	// problemas: ['Selecione', 'Teclado', 'Mouse', 'Monitor', 'Fonte', 'Outros'],
};

export function Chamado({navigation}: Chamado){
	const [selectedProblems, setSelectedProblems] = useState<unknown>('Selecione');
	const [selectedStatus, setSelectedStatus] = useState<unknown>('Ativo');
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [arrayProblems, setArrayProblems] = useState(['Selecione', 'Teclado', 'Mouse', 'Monitor', 'Fonte', 'Outros']);

	const [data, setData] = useState({
		id: '',
		nome: '',
		value: '',
		problema: '',
	});

	function showToast() {
		Toast.show({
			type: 'success',
			text1: 'Sucesso',
			text2: 'Chamado aberto!',
		});
	}

	function handleModal() {
		setIsModalVisible(true);
	}
	handleModal;
	useEffect(() => {
		console.log(selectedProblems);
		console.log(selectedStatus);

		const getData = async () => {
			setLoading(false);
			try {

				const value = await AsyncStorage.getItem('@codigo');
				if(value !== null) {
					// value previously stored

					if (!value) {
						alert('Dispositivo não encontrado no banco de dados');
					}

					setData({id: value, nome: '', value: '2', problema: ''});

				}
			} catch(e) {
				// error reading value
				console.log(e);
			}
			setLoading(true);
		};
		getData();
	}, []);

	  function handleChamado(){
		navigation.navigate('Home');
		showToast();
	}

	if (loading === false) {
		return(
			<SafeAreaView style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
				<Image  source={require('../../assets/gifs/loading.png')} style={{width: 150, height: 150}}></Image>
			</SafeAreaView>
		);
	}

	return(
		<>
			<BackButton onPress={() => navigation.navigate('Home')}/>

			<MainContainer>

				<HeaderView>

					<MainText>{data.id.toUpperCase()} </MainText>
					<Ionicons name='cog-outline' size={50} color={'#fff'}/>
				</HeaderView>


				<DropDown
					enabled={true}
					id={1}
					selectedItem={selectedProblems}
					setSelectedItem={setSelectedProblems}
					data={arrayProblems}
					name={'Problemas'}
				/>

				{selectedProblems === 'Outros'  &&
        <InputView>
        	<Input label={'Digite aqui o problema:'}/>
        </InputView>
				}

				<DropDown
					id={2}
					selectedItem={selectedStatus}
					enabled={false}
					setSelectedItem={setSelectedStatus}
					data={chamado.status}
					name={'Status'}
				/>

				{selectedProblems != 'Selecione' &&
					<ButtonChamado
						onPress={()=> handleChamado()}
						style={{
							shadowColor: '#3ac0ff',
							shadowOffset: {
								width: 0,
								height: 7,
							},
							shadowOpacity: 1,
							shadowRadius: 9.11,

							elevation: 20,
						}}>
						<TextButton>Abrir chamado</TextButton>
					</ButtonChamado>
				}
			</MainContainer>

		</>

	);
}


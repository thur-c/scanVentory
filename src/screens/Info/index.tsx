import React, { useState, useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/RootStackParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InputContainer, MainContainer, TextId} from './styles';
import { Pc } from '../../forms/Pc';
import { Nobreak } from '../../forms/Nobreak';
import BackButton from '../../components/BackButton/Index';
import Flatlist from '../../components/FlatList';
import { Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { api } from '../../utils/api';

type Info = NativeStackScreenProps<RootStackParamList, 'Info'>;
interface dynamicsFields{
  dc_equipamento: string,
  [key: string]: any,
}

export function Info({navigation}: Info) {
	const [showBtn, setshowBtn] = useState(false);
	const [loading, setLoading] = useState(false);
	const [editInput, setEditInput] = useState(false);
	const [data, setData] = useState<dynamicsFields>({dc_equipamento: ''});


	function showToast() {
		Toast.show({
			type: 'error',
			text1: 'Atenção!',
			text2: 'Dispositivo não cadastrado no banco de dados',
		});
	}

	function handleButton(){
		setshowBtn(true);
		setEditInput(true);
		showToast();
	}

	function handleRedirect(){
		navigation.navigate('Home');
	}

	useEffect(() => {

		const getData = async () => {
			setLoading(false);
			try {
				const value = await AsyncStorage.getItem('@codigo');
				if(value !== null) {
					let equipamento;
					let result;
					// value previously stored

					if (value.split('-').length == 2) {
						equipamento = 'pc';
						try {
							const response = await api.get(`/pc/${value}`);
							result = response.data[0];
						} catch (error) {
							console.error(error);
						}
					}else{
						switch (value.split('-')[1]) {
						case 'nbk':
							try {
								const response = await api.get(`/nobreak/${value}`);
								result = response.data[0];
							} catch (error) {
								console.error(error);
							}
							break;
						}
					}
					console.log(result);
					//`localhost/equipamentos/${equpamento}`
					if (!result) {
						//alert('Dispositivo não encontrado no banco de dados');
						handleButton();
						setData({dc_equipamento: value,});
					}else{
						setData(result);
					}
				}
			} catch(e) {
				// error reading value
				console.log(e);
			}
			setLoading(true);
		};
		getData();
	}, []);

	const DATA = [
		{
			id: '1',
			title: '1',
		},
		{
			id: '2',
			title: '2',
		},
		{
			id: '3',
			title: '3',
		},
		{
			id: '4',
			title: '4',
		},
		{
			id: '5',
			title: '5',
		},
		{
			id: '6',
			title: '6',
		},
		{
			id: '7',
			title: '7',
		},

	];

	if (loading === false) {
		return(
			<SafeAreaView style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center'}}>
				<Image source={require('../../assets/gifs/loading.png')} style={{width: 150, height: 150}}></Image>
			</SafeAreaView>
		);
	}
	return (
		<>
			<BackButton onPress={()=> navigation.goBack()}/>
			<MainContainer>
				<TextId>
					{data.dc_equipamento.toUpperCase()}
				</TextId>


				<InputContainer>

					{
						data.dc_equipamento.split('-').length === 2 &&
          <Pc redirect={() => handleRedirect()} showBtn={showBtn} data={data} editable={editInput}/>
					}

					{
						data.dc_equipamento.split('-').length > 2 && data.dc_equipamento.includes('nbk') &&
          <Nobreak redirect={() => handleRedirect()} showBtn={showBtn} data={data} editable={editInput}/>
					}

				</InputContainer>
				{showBtn === false  && <Flatlist listData={DATA}/>}
			</MainContainer>

		</>
	);
}


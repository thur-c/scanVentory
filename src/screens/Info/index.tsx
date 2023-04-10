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

type Info = NativeStackScreenProps<RootStackParamList, 'Info'>;

interface dynamicsFields{
  id: string,
  [key: string]: any,
}

export function Info({navigation}: Info) {
	const [showBtn, setshowBtn] = useState(false);
	const [loading, setLoading] = useState(false);
	const [editInput, setEditInput] = useState(false);
	const [data, setData] = useState<dynamicsFields>({id: ''});



	function showToast() {
		Toast.show({
			type: 'error',
			text1: 'Atenção!',
			text2: 'Usuário não cadastrado no banco de dados',
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
					// value previously stored

					if (!value) {
						//alert('Dispositivo não encontrado no banco de dados');
						handleButton();
						setData({
							id: value,
							exemp:'',
						});
					}else{
						setData({
							id: value,
							nome:'NBK T.I',
							tomadas: '4',
							bivolt: 'Sim',
							entrada: '110/220',
							saida: '110/220',
						});
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
					{data.id.toUpperCase()}
				</TextId>


				<InputContainer>
					{data.id.split('-').length === 2 &&
          <Pc redirect={() => handleRedirect()} showBtn={showBtn} data={data} editable={editInput}/>}

					{data.id.split('-').length > 2 && data.id.includes('nbk') &&
          <Nobreak redirect={() => handleRedirect()} showBtn={showBtn} data={data} editable={editInput}/>}

				</InputContainer>
				{showBtn === false  && <Flatlist listData={DATA}/>}
			</MainContainer>

		</>
	);
}


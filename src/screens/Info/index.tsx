import React, { useState, useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../@types/RootStackParamList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BtnCadastrar, InputContainer, MainContainer, TextId} from './styles';
import { Pc } from '../../forms/Pc';
import { Nobreak } from '../../forms/Nobreak';
import BackButton from '../../components/BackButton/Index';

type Info = NativeStackScreenProps<RootStackParamList, 'Info'>;

export function Info({navigation}: Info) {
	const [btn, setBtn] = useState(false);
	const [data, setData] = useState({
		id: '',
		nome: '',
		value: ''
	});


	useEffect(() => {

		const getData = async () => {
			try {
				const value = await AsyncStorage.getItem('@codigo');
				if(value !== null) {
					// value previously stored

					if (!value) {
						alert('Dispositivo não encontrado no banco de dados');
						setBtn(true);
					}

					setData({id: value, nome: 'no-break', value: '2'});
					console.log(value);
				}
			} catch(e) {
				// error reading value
				console.log(e);
			}

		};

		getData();


	}, []);

	const nobreak = {
		nome:'',
		status:'',
		tomadas: '',
		bivolt: false,
		entrada: '',
		saida: '',
	};

	const pc = {
		nome: '',
		tipo:'',
		status:'',
		memoria:'',
		ssd: '',
		fonteBateria:'',
		so: '',
	};

	return (
		<>
			<MainContainer>
				<TextId>
					{data.id.toUpperCase()}
				</TextId>

				<InputContainer>
					{data.id.split('-').length === 2
      && <Pc data={pc} editable={false}/>}

					{data.id.split('-').length > 2 &&
      data.id.includes('nbk') &&
      <Nobreak data={nobreak} editable={false}/>}
				</InputContainer>
				{btn === true && <BtnCadastrar/>}

				<BackButton onPress={()=> navigation.goBack()}/>
			</MainContainer>
		</>
	);
}

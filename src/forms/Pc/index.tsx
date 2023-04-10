import React, { useState } from 'react';
import Input from '../../components/Input';
import DropDown from '../../components/DropDown';
import { BtnCadastrar, TextButton } from './styles';
import Toast from 'react-native-toast-message';
import { RootStackParamList } from '../../@types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Pc =  NativeStackScreenProps<RootStackParamList, 'Pc'>;

interface pcProps{
  editable: boolean;
  showBtn: boolean;


  data: {
    nome: string,
		ssd: string,
		fonteBateria:string,
		so: string,
		memoria:string,
		tipo:string,
  }
}

export function Pc({editable, data, showBtn, redirect}: pcProps){
	const [nome, setNome] = useState(data.nome);
	const [ssd, setSsd] = useState(data.ssd);
	const [fonteBateria, setFonteBateria] = useState(data.fonteBateria);
	const [so, setSo] = useState(data.so);
	const [memoria, setMemoria] = useState(data.memoria);
	const [tipo, setTipo] = useState(data.tipo);

	function showToast() {
		Toast.show({
			type: 'success',
			text1: 'Sucesso!',
			text2: 'Computador cadastrado com sucesso!',
		});
	}

	function handleCadastro(){
		try {
			console.log(nome + ' 1');
			console.log(ssd + ' 2');
			console.log(fonteBateria + ' 3');
			console.log(so + ' 4');
			console.log(memoria + ' 5');
			console.log(tipo + ' 6');
			showToast();
			redirect();


		} catch (error) {
			console.log(error);
		}

	}

	return(
		<>
			<Input onChangeText={(e: string)=> setNome(e)} label={'Nome'} value={data.nome} editable={editable}/>
			<Input onChangeText={(e: string)=> setSsd(e)} label={'SSD'} value={data.ssd} editable={editable}/>
			<Input onChangeText={(e: string)=> setFonteBateria(e)} label={'Fonte/Bateria'} value={data.fonteBateria} editable={editable}/>
			<Input onChangeText={(e: string)=> setSo(e)} label={'S.O'} value={data.so} editable={editable}/>
			<Input onChangeText={(e: string)=> setMemoria(e)} label={'Memória'} value={data.memoria} editable={editable}/>
			<Input onChangeText={(e: string)=> setTipo(e)} label={'Pc ou Notebook'} value={data.tipo} editable={editable}/>



			{showBtn === true && (<BtnCadastrar onPress={()=> handleCadastro()}>
				<TextButton>CADASTRAR</TextButton>
			</BtnCadastrar>)
			}


			{/* <Input name={'Status'} value={data.status} editable={editable}></Input> */}
		</>
	);
}

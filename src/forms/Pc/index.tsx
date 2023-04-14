import React, { useState } from 'react';
import Input from '../../components/Input';
import DropDown from '../../components/DropDown';
import { BtnCadastrar, TextButton } from './styles';
import Toast from 'react-native-toast-message';
import { RootStackParamList } from '../../@types/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { api } from '../../utils/api';

type Pc =  NativeStackScreenProps<RootStackParamList, 'Pc'>;

interface pcProps{
  editable: boolean;
  showBtn: boolean;
  redirect: () => void;

  data: {
    dc_equipamento: string,
    nome: string,
		ssd: string,
		fonte_bateria:string,
		so: string,
		memoria:string,
		tipo:string,
  }
}

export function Pc({editable, data, showBtn, redirect}: pcProps & any){
	const [selectedTipo, setSelectedTipo] = useState<unknown>(data.tipo === 1 ? 'PC' : 'NOTEBOOK');
	const [arrayTipo, setArrayTipo] = useState(['Selecione', 'PC', 'NOTEBOOK']);
	const [nome, setNome] = useState(data.nome);
	const [ssd, setSsd] = useState(data.ssd);
	const [fonte_bateria, setFonte_bateria] = useState(data.fonte_bateria);
	const [so, setSo] = useState(data.so);
	const [memoria, setMemoria] = useState(data.memoria);

	function showToast() {
		Toast.show({
			type: 'success',
			text1: 'Sucesso!',
			text2: 'Computador cadastrado com sucesso!',
		});
	}

	function showError() {
		Toast.show({
			type: 'error',
			text1: 'Erro!',
			text2: 'Os dados não podem ser vazios.',
		});
	}

	function handleCadastro(){
		try {
			if(nome != null || selectedTipo != 'Selecione'){

				api.post('/pc', {
					dc_equipamento: data.dc_equipamento,
					categoria: 2,
					nome: nome,
					ssd: ssd,
					fonte_bateria: fonte_bateria,
					so: so,
					memoria: memoria,
					tipo: selectedTipo === 'PC' ? 1 : 2,
				})
					.then(function (response) {
						console.log(response);
					})
					.catch(function (error) {
						console.log(error);
					});

				showToast();
				redirect();
			}else{
				showError();
			}


		} catch (error) {
			console.log(error);
		}

	}

	return(
		<>
			<Input placeholder='Ex. PC Qualidade' onChangeText={(e: string)=> setNome(e)} label={'Nome'} value={data.nome} editable={editable}/>
			<Input onChangeText={(e: string)=> setSsd(e)} label={'Armazenamento'} value={data.ssd} editable={editable}/>
			<Input onChangeText={(e: string)=> setFonte_bateria(e)} label={'Fonte/Bateria'} value={data.fonte_bateria} editable={editable}/>
			<Input onChangeText={(e: string)=> setSo(e)} label={'S.O'} value={data.so} editable={editable}/>
			<Input onChangeText={(e: string)=> setMemoria(e)} label={'Memória'} value={data.memoria} editable={editable}/>
			<DropDown
				id={1}
				enabled={editable}
				selectedItem={selectedTipo}
				setSelectedItem={setSelectedTipo}
				data={arrayTipo}
				name={'PC ou Notebook'}
			/>
			{showBtn === true && (<BtnCadastrar onPress={()=> handleCadastro()}>
				<TextButton>CADASTRAR</TextButton>
			</BtnCadastrar>)
			}

			{/* <Input name={'Status'} value={data.status} editable={editable}></Input> */}
		</>
	);
}

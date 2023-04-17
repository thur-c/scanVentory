import React, { useState } from 'react';
import Input from '../../components/Input';
import { BtnCadastrar, TextButton } from './styles';
import Toast from 'react-native-toast-message';
import { api } from '../../utils/api';
import DropDown from '../../components/DropDown';
interface nobreakProps{

  editable: boolean;
  showBtn: boolean;
  redirect: () => void;
  data: {
    dc_equipamento: string,
    nome:string,
    qnt_tomadas: number,
    bivolt: number,
    entrada: string,
    saida: string,
  }
}

export function Nobreak({editable, data, showBtn, redirect}: nobreakProps & any){
	const [selectedBivolt, setSelectedBivolt] = useState<unknown>(data.bivolt === 1 ? 'SIM' : 'NÃO');
	const [arrayBivolt, setArrayBivolt] = useState(['Selecione', 'SIM', 'NÃO']);
	const[nome, setNome] = useState(data.nome);
	const[tomadas, setTomadas] = useState(data.qnt_tomadas?.toString());
	const[entrada, setEntrada] = useState(data.entrada);
	const[saida, setSaida] = useState(data.saida);

	let errorMessage = '';

	function showToast() {
		Toast.show({
			type: 'success',
			text1: 'Sucesso!',
			text2: 'No-Break cadastrado com sucesso!',
		});
	}

	function showError() {
		Toast.show({
			type: 'error',
			text1: 'Erro!',
			text2: errorMessage,
		});
	}

	function handleCadastro(){
		if(nome != null && saida != null && selectedBivolt != 'Selecione'){
			api.post('/nobreak', {
				dc_equipamento: data.dc_equipamento,
				categoria: 1,
				nome: nome,
				qnt_tomadas: tomadas,
				bivolt: selectedBivolt === 'SIM' ? 1 : 0,
				entrada: entrada,
				saida: saida,
			})
				.then(function (response) {
					console.log(response);
					showToast();
					redirect();
				})
				.catch(function(error) {
					errorMessage = (error.response.data);
					console.log(error.response.data);
					showError();
				});
		}else if(nome == null){
			errorMessage = ('Preencha os dados');
			showError();
		}
	}





	return(
		<>
			<Input placeholder='Ex. Nobreak Tingimento' onChangeText={(e: string)=> setNome(e)} label={'Nome'} value={nome} editable={editable}></Input>
			<Input keyboardType='numeric' onChangeText={(e: string)=> setTomadas(e)} label={'Quantidade de tomadas'} value={tomadas} editable={editable}/>
			<DropDown
				id={1}
				enabled={editable}
				selectedItem={selectedBivolt}
				setSelectedItem={setSelectedBivolt}
				data={arrayBivolt}
				name={'Bivolt'}

			/>
			<Input placeholder='Ex. 110/220V' onChangeText={(e: string)=> setEntrada(e)} label={'Entrada'} value={entrada} editable={editable}/>
			<Input placeholder='Ex. 110/220V' onChangeText={(e: string)=> setSaida(e)} label={'Saída'} value={saida} editable={editable}/>

			{showBtn === true && (
				<BtnCadastrar onPress={()=> handleCadastro()}>
					<TextButton>CADASTRAR</TextButton>
				</BtnCadastrar>)
			}
		</>
	);
}

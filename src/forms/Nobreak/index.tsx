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

export function Nobreak({editable, data, showBtn, redirect}: nobreakProps){
	const [selectedBivolt, setSelectedBivolt] = useState<unknown>(data.bivolt === 1 ? 'SIM' : 'NÃO');
	const [arrayBivolt, setArrayBivolt] = useState(['Selecione', 'SIM', 'NÃO']);
	const[nome, setNome] = useState(data.nome);
	const[tomadas, setTomadas] = useState(data.qnt_tomadas?.toString());
	const[entrada, setEntrada] = useState(data.entrada);
	const[saida, setSaida] = useState(data.saida);

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
			text2: 'Os dados não podem ser vazios.',
		});
	}

	function handleCadastro(){
		try {
			if(nome != null){

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
			<Input onChangeText={(e: string)=> setNome(e)} label={'Nome'} value={nome} editable={editable}></Input>
			<Input keyboardType='numeric' onChangeText={(e: string)=> setTomadas(e)} label={'Quantidade de tomadas'} value={tomadas} editable={editable}/>
			<DropDown
				id={1}
				enabled={editable}
				selectedItem={selectedBivolt}
				setSelectedItem={setSelectedBivolt}
				data={arrayBivolt}
				name={'Bivolt'}

			/>
			<Input onChangeText={(e: string)=> setEntrada(e)} label={'Entrada'} value={entrada} editable={editable}/>
			<Input onChangeText={(e: string)=> setSaida(e)} label={'Saída'} value={saida} editable={editable}/>

			{showBtn === true && (
				<BtnCadastrar onPress={()=> handleCadastro()}>
					<TextButton>CADASTRAR</TextButton>
				</BtnCadastrar>)
			}
		</>
	);
}

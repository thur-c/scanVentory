import React, { useState } from 'react';
import Input from '../../components/Input';
import { BtnCadastrar, TextButton } from './styles';
import Toast from 'react-native-toast-message';
interface nobreakProps{

  editable: boolean;
  showBtn: boolean;

  data: {
    nome:string,
    tomadas: string,
    bivolt: string,
    entrada: string,
    saida: string,
  }
}

export function Nobreak({editable, data, showBtn, redirect}: nobreakProps){
	const[nome, setNome] = useState(data.nome);
	const[tomadas, setTomadas] = useState(data.tomadas);
	const[bivolt, setBivolt] = useState(data.bivolt);
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
			text2: 'Os dados não podem ser vazios!',
		});
	}

	function handleCadastro(){
		try {
			if(nome != null){
				console.log(nome + ' 1');
				console.log(tomadas + ' 2');
				console.log(bivolt + ' 3');
				console.log(entrada + ' 4');
				console.log(saida + ' 5');
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
			<Input onChangeText={(e: string)=> setNome(e)} label={'Nome'} value={data.nome} editable={editable}></Input>
			<Input  onChangeText={(e: string)=> setTomadas(e)} label={'Quantidade de tomadas'} value={data.tomadas} editable={editable}/>
			<Input onChangeText={(e: string)=> setBivolt(e)} label={'Bivolt'} value={data.bivolt} editable={editable}/>
			<Input onChangeText={(e: string)=> setEntrada(e)} label={'Entrada'} value={data.entrada} editable={editable}/>
			<Input onChangeText={(e: string)=> setSaida(e)} label={'Saída'} value={data.saida} editable={editable}/>

			{showBtn === true && (
				<BtnCadastrar onPress={()=> handleCadastro()}>
					<TextButton>CADASTRAR</TextButton>
				</BtnCadastrar>)
			}
		</>
	);
}

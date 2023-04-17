import React from 'react';
import { Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



import Scan from '../Scan';

import {ModalView
} from './styles';

interface ModalProps {
	visible: boolean;
	onClose: () => void;
  redirect: () => void;
}


export function ModalCartao({
	visible,
	onClose,
	redirect,
}: ModalProps) {

	async function redirectConsulta(linkBmtech: string){
		//trata, salvar local, fecha modal, navigate
		console.log(linkBmtech + ' #############');
		try {
			const codigo = linkBmtech.split('devices/')[1].slice(0,-1);
			await AsyncStorage.setItem('@codigo', codigo);
			redirect();
			closeModal();
		} catch (e) {
			// saving error
			alert('Erro na leitura, tente novamente');
		}

	}

	function closeModal(){
		onClose();
	}

	return (
		<Modal
			visible={visible}
			animationType='slide'
			onRequestClose={onClose}>
			<ModalView>
				<Scan setValue={redirectConsulta}></Scan>
			</ModalView>
		</Modal>
	);
}

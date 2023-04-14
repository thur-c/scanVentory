import React, { useState } from 'react';
import { InputContainer, MainContainer, TextInput } from './styles';

export default function Input({label, ...inputProps}: any){

	function handleText(e :any){
		//(e)=> handleText(setValue)
	}

	return(
		<MainContainer>
			<TextInput>{label}</TextInput>
			<InputContainer  {...inputProps}>
			</InputContainer>

		</MainContainer>

	);
}

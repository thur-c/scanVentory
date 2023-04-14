import React from 'react';
import { InputContainer, MainContainer, TextInput } from './styles';

export default function Input({label, ...inputProps}: any){

	return(
		<MainContainer>
			<TextInput>{label}</TextInput>
			<InputContainer {...inputProps}>
			</InputContainer>

		</MainContainer>

	);
}

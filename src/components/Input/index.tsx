import React from 'react';
import { InputContainer, MainContainer, TextInput } from './styles';

export default function Input({name, value, editable}){


	return(
		<MainContainer>
			<TextInput>{name}</TextInput>
			<InputContainer  value={value} editable={editable}></InputContainer>

		</MainContainer>

	);
}

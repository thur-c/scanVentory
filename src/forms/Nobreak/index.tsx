import React from 'react';
import Input from '../../components/Input';

interface nobreakProps{

  editable: boolean;

  data: {
    nome:string,
    status:string,
    tomadas: string,
    bivolt: boolean,
    entrada: string,
    saida: string,
  }
}

export function Nobreak({editable, data}: nobreakProps){


	return(
		<>
			<Input name={'Nome'} value={data.nome} editable={editable}></Input>
			<Input name={'Status'} value={data.status} editable={editable}></Input>
			<Input name={'Quantidade de tomadas'} value={data.tomadas} editable={editable}></Input>
			<Input name={'Bivolt'} value={data.bivolt} editable={editable}></Input>
			<Input name={'Entrada'} value={data.entrada} editable={editable}></Input>
			<Input name={'Saída'} value={data.saida} editable={editable}></Input>
		</>
	);
}

import React from 'react';
import Input from '../../components/Input';

interface pcProps{

  editable: boolean;

  data: {
    nome: string,
		tipo:string,
		status:string,
		memoria:string,
		ssd: string,
		fonteBateria:string,
		so: string,
  }
}

export function Pc({editable, data}: pcProps){


	return(
		<>

			<Input name={'Nome'} value={data.nome} editable={editable}></Input>
			<Input name={'Status'} value={data.status} editable={editable}></Input>
			<Input name={'SSD'} value={data.ssd} editable={editable}></Input>
			<Input name={'Fonte/Bateria'} value={data.fonteBateria} editable={editable}></Input>
			<Input name={'S.O'} value={data.so} editable={editable}></Input>
			<Input name={'Memória'} value={data.memoria} editable={editable}></Input>
			<Input name={'Desktop ou Notebook'} value={data.tipo} editable={editable}></Input>
		</>
	);
}

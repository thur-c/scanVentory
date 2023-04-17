import React from 'react';
import {  FlatListView, MainContainer, MainText, TextItemList, TextView, ViewItemList } from './styles';


type ItemProps = {title: string};



export default function Flatlist({listData}: any){
	const Item = ({title}: ItemProps) => (
		<ViewItemList>
			<TextItemList>
      • Date {title + '\n'}
        conteúdo
			</TextItemList>
		</ViewItemList>
	);
	return (

		<MainContainer>

			<TextView>
				<MainText>HISTÓRICO</MainText>
			</TextView>


			<FlatListView
				data={listData}
				renderItem={({item}: any) => <Item title={item.title} />}
				keyExtractor={(item: any) => item.id}
				scrollEnabled={true}
			/>

		</MainContainer>


	);
}



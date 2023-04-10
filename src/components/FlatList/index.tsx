import React from 'react';
import { FlatList } from 'react-native';
import {  FlatListView, MainContainer,  MainText, TextItemList, TextView, ViewItemList } from './styles';


type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
	<ViewItemList>
		<TextItemList>
      • DATA {title + '\n'}
      conteúdo
		</TextItemList>
	</ViewItemList>
);

export default function Flatlist({listData}: any){
	return (

		<MainContainer>

			<TextView>
				<MainText>HISTÓRICO</MainText>
			</TextView>


			<FlatListView
				data={listData}
				renderItem={({item}) => <Item title={item.title} />}
				keyExtractor={item => item.id}
				scrollEnabled={true}
			/>

		</MainContainer>


	);
}



import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import {  FlatListView, MainContainer,  MainText, TextItemList, TextView, ViewItemList } from './styles';


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
				renderItem={({item}) => <Item title={item.title} />}
				keyExtractor={item => item.id}
				scrollEnabled={true}
			/>

		</MainContainer>


	);
}



import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';


export const MainContainer = styled.SafeAreaView`
  justify-content: center;
  width: 100%;
  flex:1;
  padding: 1px 5px;
`;


export const TextItemList = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 300;
`;

export const TextView = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
`;

export const MainText = styled.Text`
  font-size: 25px;
  color: #fff;
  margin-top: 10px;
`;
export const FlatListView = styled(FlatList)`
  border-radius: 5px;
  padding: 5px 5px;

`;

export const ViewItemList = styled.View`
  border: 1px solid #fff;
  margin-bottom: 5px;
  padding: 1px 6px;
  border-radius: 5px;
  justify-content: center;

`;


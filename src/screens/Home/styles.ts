import styled from 'styled-components/native';


export const MainContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;


export const BaseButton = styled.TouchableOpacity`
  margin-top: 2%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 330px;
  height: 85px;
  border-radius: 20px;
  margin-bottom: 2%;
  border: 3px solid #000;

`;



export const TextBtn = styled.Text`
  font-size: 28px;
`;
export const MainText = styled.Text`
  font-size: 55px;
  color: #fff;

`;

//STYLESHEET

import { StyleSheet } from 'react-native';



export const styles = StyleSheet.create({
	shadow: {
		shadowColor: '#3ac0ff',
		shadowOffset: {
			width: 0,
			height: 10,
		},
		shadowOpacity: 0.41,
		shadowRadius: 9.11,
		elevation: 24,
	},

});

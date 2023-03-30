import styled from 'styled-components/native';

export const ModalView = styled.SafeAreaView`
align-items: center;
justify-content: center;
background-color: #000;
flex: 1;
position: relative;
`;
export const FecharButton = styled.TouchableOpacity`
	width: 20%;
	height: 40px;
	background-color: #f50d41;
	align-items: center;
	justify-content: center;
	margin-top: 20px;
	border-radius: 10px;
	border: 1px;
	border-color: #000;
`;

export const FecharText = styled.Text`
color: #fff;
font-size: 20px;
`;


export const CartaoInput = styled.TextInput`
	width: 30%;
	height: 60px;
	margin-bottom: 20px;
	font-size: 30px;
	background-color: #fff;
	display: none;
`;
export const CrachaInput = styled.TextInput`
	width: 30%;
	height: 60px;
	margin-bottom: 20px;
	font-size: 30px;
	background-color: #fff;
	display: none;
`;


export const NoScan = styled.TouchableOpacity`
`;

export const MainText = styled.Text`
/* color: #FFFF00; */
font-size: 30px;
text-emphasis-color: #fff;
background-color: #000;
`;

export const InputView = styled.View`
position: absolute;
align-items: center;
justify-content: center;
`;



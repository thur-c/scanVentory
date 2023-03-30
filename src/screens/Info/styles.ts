import styled from 'styled-components/native';

export const MainContainer = styled.SafeAreaView`
  background-color: #000;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  flex-grow: 1;
  `;

export const TextId = styled.Text`
  color: #fff;
  font-size: 40px;
  font-weight:500;
  letter-spacing: 2px;
`;

export const MainText = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight:500;
  letter-spacing: 1px;
  margin: 10px 3% 0 3%;
  color: #fff;
`;

export const BtnCadastrar = styled.TouchableOpacity`
  margin-top: 2%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 50%;
  height: 10%;
  border-radius: 20px;
`;


export const InputContainer = styled.SafeAreaView`
width: 100%;
height: 80%;
flex-direction: row;
flex-wrap: wrap;
`;

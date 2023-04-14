import styled from 'styled-components/native';


export const MainContainer = styled.View`
  background-color: #000;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const MainText = styled.Text`
  color: #fff;
  font-size: 45px;
  font-weight: 300;
`;

export const HeaderView = styled.SafeAreaView`
  flex-direction: row;
`;

export const InputView = styled.SafeAreaView`
  width: 100%;
  margin-bottom: 10px;
`;

export const ButtonChamado = styled.TouchableOpacity`
  width: 100%;
  background-color: #3ac0ff;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
  height: 50px;
  border-radius: 40px;
`;

export const TextButton = styled.Text`
  color: #000;
  font-size: 25px;
  font-weight: 400;
  letter-spacing: 2px;
`;

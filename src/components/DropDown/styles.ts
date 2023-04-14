import styled from 'styled-components/native';
import {Picker} from '@react-native-picker/picker';

export const MainContainer = styled.SafeAreaView`
width: 100%;
margin-top: 5px;
`;

export const DropContainer = styled.SafeAreaView`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 5px;
  width: 100%;
`;

export const PickerView = styled(Picker)`
  width: 99%;
  font-size: 20px;
  border-radius: 8px;
  color: #000;
  height: 42px;
`;

export const TextDrop = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  font-weight: bold;
  color: #fff;
`;

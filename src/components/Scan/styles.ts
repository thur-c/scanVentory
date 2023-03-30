import styled from 'styled-components/native';
import { Camera } from 'expo-camera';


export const CameraView = styled.SafeAreaView`
  background-color: #000;
  border: 1px;
  position: relative;
`;

interface TextProps {
  changeWidth: string;
  changeHeight: string;
}

export const CameraScan = styled(Camera)<TextProps>`
  width: ${props => props.changeWidth};
  height: ${props => props.changeHeight};
`;

export const Footer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
`;


export const IconScanView = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  height: 100%;
  padding-left: 5%;
  position: absolute;
  align-items: center;
  justify-content: center;
  `;
export const BaseButtonFooter = styled.TouchableHighlight`
    background: #4e4e4e;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 5px 10px;
    margin: 15px;
  `;

export const ButtonToggleFlash = styled(BaseButtonFooter)`
`;

export const ButtonToggleDirection = styled(BaseButtonFooter)`

`;






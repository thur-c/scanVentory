import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import { CameraType, FlashMode } from 'expo-camera';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Ionicons } from '@expo/vector-icons';
import {
	ButtonToggleDirection,
	ButtonToggleFlash,
	CameraScan,
	CameraView,
	Footer,
	IconScanView
} from './styles';

interface ScanProps {
	setValue: (value: string) => void

}
export default function Scan({ setValue }: ScanProps) {
	const [hasPermission, setHasPermission] = useState<boolean | null>(null);
	const [scanned, setScanned] = useState(false);
	const [flash, setFlash] = useState(FlashMode.off);
	const [cameraDirection, setCameraDirection] = useState(CameraType.back);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [orientation, setOrientation] = useState<any>();

	useEffect(() => {
		async function changeScreenOrientation() {
			const screenOrientation = await ScreenOrientation.getOrientationAsync();
			setOrientation(screenOrientation);
		}
		changeScreenOrientation();

		const listener = ScreenOrientation.addOrientationChangeListener(orientation => {
			setOrientation(orientation);
			console.log(orientation);
		});

		return () => {
			listener.remove();
		};
	}, [orientation]);

	useEffect(() => {
		const getBarCodeScannerPermissions = async () => {
			const { status } = await BarCodeScanner.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		};

		getBarCodeScannerPermissions();
	}, []);

	useEffect(() => {
		if (scanned === true) {
			setTimeout(() => {
				setScanned(false);
			}, 1000);
		}
	}, [scanned]);

	const handleBarCodeScanned = ({ data }: BarCodeEvent) => {
		setScanned(true);
		setValue(data);
	};

	if (hasPermission === null) {
		return <Text>Requesting for camera permission</Text>;
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	return (
		<>
			<CameraView>
				<CameraScan
					changeHeight={orientation === 1 && orientation !== 2 ? '100%' : '800px'}
					changeWidth={orientation === 1 && orientation !== 2 ? '660px' : '1440px'}
					type={cameraDirection}
					onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
					flashMode={flash}
				/>
			</CameraView>


			<IconScanView>
				<Ionicons name='scan-outline'  size={300} color="#fff"></Ionicons>
			</IconScanView>



			<Footer>
				<ButtonToggleFlash onPress={() => setFlash(flash === FlashMode.torch ? FlashMode.off : FlashMode.torch)}>
					<Ionicons name='flashlight-outline' size={80} style={{ color: '#FFF' }} />
				</ButtonToggleFlash>

				<ButtonToggleDirection
					onPress={() => setCameraDirection(cameraDirection === CameraType.back ? CameraType.front : CameraType.back)}
				>
					<Ionicons name='camera-reverse-outline' size={80} style={{ color: '#FFF' }} />
				</ButtonToggleDirection>
			</Footer>
		</>
	);
}

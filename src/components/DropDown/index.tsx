import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';
import { DropContainer, MainContainer, PickerView, TextDrop } from './styles';

interface DropDownProps{
  name: string,
  data: string[];
  selectedItem: any;
  id: any;
  enabled: boolean;
  setSelectedItem: (itemValue: any) => void;
}

export default function DropDown({
	name,
	data,
	selectedItem,
	id,
	enabled,
	setSelectedItem
}: DropDownProps){



	return(
		<MainContainer>

			<TextDrop>{name}</TextDrop>
			<DropContainer>
				<PickerView
					enabled={enabled}
					id={id}
					dropdownIconColor={'#fff'}
					selectedValue={selectedItem}
					onValueChange={(itemValue) =>
						setSelectedItem(itemValue)}
					mode={'dropdown'}>
					{
						data.map((item: string) => (
							<Picker.Item  label={item} value={item} key={item}></Picker.Item>
						))
					}

				</PickerView>
			</DropContainer>
		</MainContainer>

	);
}

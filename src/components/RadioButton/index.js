import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import theme from '../../../theme';
import { View, Text } from 'react-native';

const CustomRadioButton = (props) => {
  return (
    <View style={{flexDirection: 'row'}} >
      <RadioButton
        value={props.value}
        status={ props.checked === props.value ? 'checked' : 'unchecked' }
        onPress={() => props.setChecked(props.value)}
        color={theme.color.primary}
        />
        <Text style={{marginLeft: 7,marginTop:6,fontFamily:theme.font.semiBold,fontSize:17}} >{props.value}</Text>
    </View>
  );
};

export default CustomRadioButton;
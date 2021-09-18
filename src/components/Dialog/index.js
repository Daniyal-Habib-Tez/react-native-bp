import * as React from 'react';
import {View} from 'react-native';
import {Button, Paragraph, Dialog, Portal} from 'react-native-paper';

const CustomDialog = (props) => {
  return (
    <View>
      <Portal>
        <Dialog visible={props.visibility} onDismiss={props.onDismiss}>
          <Dialog.Title>{props.title}</Dialog.Title>
          <Dialog.Content>{props.children}</Dialog.Content>
          <Dialog.Actions>
            <Button onPress={props.onDismiss}>Cancel</Button>
            {props.action && (
              <Button onPress={props.action.onPress}>
                {props.action.label}
              </Button>
            )}
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default CustomDialog;

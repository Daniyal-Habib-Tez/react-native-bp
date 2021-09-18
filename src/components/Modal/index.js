import * as React from 'react';
import { Modal,View, Portal, Text, Button, Provider } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomModal = (props) => {

  return (
    <Provider>
      <Portal>
        <Modal contentContainerStyle={styles.container} visible={props.visible} onDismiss={props.onDismiss}>
          {props.children}
        </Modal>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
    container: {
        // height: '70%',
        backgroundColor: "white",
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 5,
        justifyContent:"flex-start"
    }
})

export default CustomModal;
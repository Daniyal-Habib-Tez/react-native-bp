import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { connect } from 'react-redux';
import { handleSnackbarClose } from '../../store/actions/layoutActions';
import theme from '../../../theme';

const CustomSnackbar = ({handleClose,message,open}) => {

  return (
      <Snackbar
        visible={open}
        onDismiss={handleClose}
        action={{
          label: 'Close',
          onPress: () => {
            handleClose()
          },
        }}>
        <Text style={styles.text} >{message ? message : ''}</Text>
      </Snackbar>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.font.regular
  },
});

const mapStateToProps = (state) => {
    return{
      open: state.layoutReducer.snackbarState,
      message: state.layoutReducer.snackbarMessage
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      handleClose: () => dispatch(handleSnackbarClose())
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CustomSnackbar);
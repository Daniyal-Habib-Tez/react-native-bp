import React, {useState, useContext} from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import AuthContext from '../../store/context/AuthContext';

const CustomAppbar = props => {
  const [visiblity, setVisiblity] = useState(true);
  const context = useContext(AuthContext);

  const menuDismiss = () => {
    setVisiblity(false);
  };

  const openMenu = () => {
    setVisiblity(true);
  };

  const backAction = () => {
    console.log('chala-->', props);

    props.navigation.goBack();
  };

  const logoutAction = () => {
    console.log('logout action -->', context);
    context();
  };
  console.log('props in app-->', props);
  return (
    <Appbar.Header>
      {props.back && <Appbar.BackAction onPress={() => backAction()} />}
      <Appbar.Content title={props.title} />
      {props.openModal && (
        <Appbar.Action icon={'folder-plus'} onPress={() => props.openModal()} />
      )}
      {props.openModal && (
        <Appbar.Action icon={'refresh'} onPress={() => props.onRefresh()} />
      )}
      <Menu
        onDismiss={menuDismiss}
        visible={visiblity}
        anchor={
          <Appbar.Action
            color="white"
            icon="dots-vertical"
            onPress={openMenu}
          />
        }>
        <Menu.Item title="Logout" onPress={logoutAction} />
      </Menu>
    </Appbar.Header>
  );
};

export default CustomAppbar;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
});

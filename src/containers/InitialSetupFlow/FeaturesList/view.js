import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
} from 'react-native';
import CustomSurface from '../../../components/Surface';
import theme from '../../../../theme';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import { Divider } from 'react-native-paper';
import { CustomBackButtonHeader } from '../../../components/Header';

const { height, width } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const List = ({ icon, text }) => {
  return (
    <>
      <View style={styles.listItemContainer}>
        <View style={styles.listIcon}>
          <Image source={icon} />
        </View>
        <View style={styles.listTextContain}>
          <Text style={styles.listText}>{text}</Text>
        </View>
        <View style={styles.listLockContain}>
          <Image source={require('../../../assets/images/lock.png')} />
        </View>
      </View>
      <Divider />
    </>
  );
};

const FeatureListView: () => React$Node = (props) => {
  return (
    <View style={styles.container}>
      <CustomBackButtonHeader backFunction={props.navigateBack} title={"Features"} />
      {/* <View style={styles.headerContainer}>
        <Icon
          name="arrowleft"
          size={30}
          color="#000000"
          onPress={() => props.navigateBack()}
        />
      </View>
      <View style={styles.headerContainer} >
        <Text style={styles.heading}>Features</Text>
      </View> */}
      <View style={{ padding: 20, flex: 1 }}>

        <View style={styles.listContainer}>
          {props.featureDetails.map((item, index) => (
            <List {...item} key={index} />
          ))}
        </View>
        <View style={styles.bottomActionContain}>
          <Button
            label="Next"
            style={{ alignSelf: 'center' }}
            onPress={props.navigateToNext}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    flex: 0.1,
  },
  listContainer: {
    flex: 0.7,
    // justifyContent: 'space-around',
    // backgroundColor: 'red',
  },
  listIcon: {
    flex: 0.14,
    marginLeft: 5,
    // backgroundColor: 'yellow',
  },
  listItemContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: "center",
    // backgroundColor: 'green',
  },
  listTextContain: {
    flex: 0.7,
  },
  listText: {
    fontSize: 14,
    fontFamily: theme.font.bold,
    color: theme.color.secondary,
  },
  listLockContain: {
    flex: 0.2,
  },
  heading: {
    fontFamily: theme.font.bold,
    fontSize: 20,
    // marginBottom: 30,
    marginLeft: 5,
  },
  bottomActionContain: {
    flex: 0.2,
    justifyContent: 'space-around',
    // backgroundColor: 'yellow',
  },
});

export default FeatureListView;

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import CustomSurface from '../../../components/Surface';
import theme from '../../../../theme';
import Button from '../../../components/Button';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomInput from '../../../components/TextInput';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomBackButtonHeader } from '../../../components/Header';

const { height, width } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const CreditCardView: () => React$Node = (props) => {
  return (
    <ScrollView style={styles.container}>
      <CustomBackButtonHeader backFunction={props.navigateBack} title={"Credit Card Details"} />

      <View style={{ padding: 20 }} >

        {/* <View style={styles.headerContainer}>
        <Icon
          name="arrowleft"
          size={30}
          color="#000000"
          onPress={() => props.navigateBack()}
        />
      </View>
      <View style={{height: vh * 10}}>
        <Text style={styles.heading}>Credit Card Details</Text>
      </View> */}
        {/* <View style={styles.cardContainer}> */}
        <CustomSurface style={styles.cardContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 0.5 }}>
              <CustomInput
                label="First Name"
                customStyles={{ width: vw * 50 - 40 }}
                placeholder="John"
                onChange={props.onChange}
                value={props.firstName}
                errorText={props.firstNameError.message}
                error={props.firstNameError.error}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <CustomInput
                label="Last Name"
                placeholder="Smith"
                customStyles={{ width: vw * 50 - 40, marginLeft: 12 }}
                onChange={props.onChange}
                value={props.lastName}
                errorText={props.lastNameError.message}
                error={props.lastNameError.error}
              />
            </View>
          </View>
          <View>
            <CustomInput
              label="Credit Card No"
              placeholder="4242 4242 4242 4242"
              onChange={props.onChange}
              value={props.cardNo}
              customStyles={{ width: '100%' }}
              errorText={props.cardNoError.message}
              error={props.cardNoError.error}
              isNumber={true}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 0.5 }}>
              <CustomInput
                label="Expiration Date"
                placeholder="05/2027"
                customStyles={{ width: vw * 50 - 30 }}
                onBlur={props.onBlur}
                onChange={props.onChange}
                value={props.expiry}
                errorText={props.expiryError.message}
                error={props.expiryError.error}
                isNumber={true}
              />
            </View>
            <View style={{ flex: 0.5 }}>
              <CustomInput
                label="CVV"
                placeholder="3355"
                customStyles={{ width: vw * 50 - 50, marginLeft: 20 }}
                onChange={props.onChange}
                value={props.cvv}
                errorText={props.cvvError.message}
                error={props.cvvError.error}
                isNumber={true}
              />
            </View>
          </View>
        </CustomSurface>
        {/* </View> */}
        <View style={styles.paragraphContain}>
          <Button
            label="Done"
            style={{ alignSelf: 'center', marginBottom: 10 }}
            onPress={props.navigateToMainFlow}
          />
          <Button
            label="Skip"
            style={{ alignSelf: 'center' }}
            mode="text"
            labelStyle={{ color: 'black' }}
            onPress={props.navigateToMainFlow}
          />
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: vh * 100,
    // padding: 20,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: vh * 5
  },
  cardContainer: {
    height: vh * 43,
    padding: 10,
    paddingBottom: 20,
    // backgroundColor: 'red',
  },
  card: {
    width: '100%',
    padding: 13,
    // marginBottom: 30,
  },
  cardSelected: {
    borderWidth: 2,
    borderColor: theme.color.primary,
    borderStyle: 'solid',
  },
  productTitleContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: "yellow",
    marginBottom: 5,
  },
  productTitle: {
    fontFamily: theme.font.bold,
    fontSize: 14,
  },
  productPrice: {
    color: theme.color.primary,
  },
  productDurationContain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: "yellow"
  },
  productDuration: {
    fontSize: 12,
    fontFamily: theme.font.regular,
    color: '#B4B4B4',
  },
  productDurationRenew: {
    fontSize: 12,
    fontFamily: theme.font.regular,
    color: theme.color.primary,
  },
  heading: {
    fontFamily: theme.font.bold,
    fontSize: 20,
    // marginBottom: 30,
    marginLeft: 5,
    marginTop: 10
  },
  paragraphContain: {
    height: vh * 30,
    // alignSelf: "flex-end",
    justifyContent: 'flex-end',
    // backgroundColor: 'yellow',
  },
  paragraph: {
    fontFamily: theme.font.regular,
    fontSize: 12,
    marginBottom: 30,
  },
  durationText: {
    fontFamily: theme.font.bold,
    fontSize: 22,
    marginBottom: 10,
  },
});

export default CreditCardView;

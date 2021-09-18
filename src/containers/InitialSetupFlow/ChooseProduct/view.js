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
import { CustomBackButtonHeader } from '../../../components/Header';

const { height, width } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const PrductCard = ({
  productTitle,
  productPrice,
  productDuration,
  productRenew,
  onSelectCard,
  id,
  selectedIndex,
}) => {
  const selected = selectedIndex === id ? styles.cardSelected : {};
  return (
    <TouchableHighlight
      onPress={() =>
        onSelectCard({
          productTitle,
          productPrice,
          productDuration,
          productRenew,
          id,
        })
      }
      underlayColor="#ffffff00">
      <CustomSurface style={{ ...styles.card, ...selected }}>
        <View style={styles.productTitleContain}>
          <Text style={styles.productTitle}>{productTitle}</Text>
          <Text style={styles.productPrice}>{productPrice}</Text>
        </View>
        <View style={styles.productDurationContain}>
          <Text style={styles.productDuration}>{productDuration}</Text>
          <Text style={styles.productDurationRenew}>{productRenew}</Text>
        </View>
      </CustomSurface>
    </TouchableHighlight>
  );
};

const ChooseProductView: () => React$Node = (props) => {
  return (
    <View style={styles.container}>
      <CustomBackButtonHeader backFunction={props.navigateBack} title={"Please Choose a Product"} />
      <View style={{ padding: 20, flex: 1 }}>
        <View style={styles.cardContainer}>
          {props.cardDetails.map((item, index) => (
            <PrductCard
              {...item}
              key={index}
              id={index}
              selectedIndex={props.selectedIndex}
              onSelectCard={props.onSelectCard}
            />
          ))}
        </View>
        <View style={styles.paragraphContain}>
          <Text style={styles.paragraph}>
            Front Office is <Text style={{ color: theme.color.primary }}>FREE</Text>
          . You will only be charged after your 14 day trial ends, if have
          subscribed to a product and only when you have made a profit.Front
          Office is FREE. You will only be charged after your 14 day trial ends,
          if have subscribed to a product and only when you have made a profit.
        </Text>
          <Button
            label="Next"
            style={{ alignSelf: 'center' }}
            onPress={props.navigateToFeatureList}
          />
          <Button
            label="Skip"
            style={{ alignSelf: 'center' }}
            mode="text"
            labelStyle={{ color: 'black' }}
            onPress={props.navigateToFeatureList}
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
  cardContainer: {
    flex: 0.5,
    justifyContent: 'space-around',

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
  },
  paragraphContain: {
    flex: 0.4,
    justifyContent: 'space-around',
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

export default ChooseProductView;

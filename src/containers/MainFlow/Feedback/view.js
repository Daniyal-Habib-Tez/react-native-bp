import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import theme from '../../../../theme';
import {CustomDrawerButtonHeader} from '../../../components/Header';
import CustomSurface from '../../../components/Surface';
import StarRating from 'react-native-star-rating';
import CustomButton from '../../../components/Button';
import {TextInput} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const FeedbackView = props => {
  return (
    <>
      <ScrollView style={styles.container}>
        <CustomSurface style={styles.cardContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../../../assets/images/logo.png')}
            />
          </View>
          <View style={{marginBottom: 30}}>
            <Text style={styles.paragraph}>
              How would you rate your experience with Front-Office? Rate it with
              5 Stars.
            </Text>
          </View>
          <View style={{alignItems: 'center', marginBottom: 28}}>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={props.rating}
              selectedStar={rating => props.setRating(rating)}
              fullStarColor={'#FFC23A'}
              starSize={32}
            />
          </View>
          <View>
            <Text style={styles.paragraph}>How was your experience?</Text>
            <TextInput
              mode={'outlined'}
              value={props.review}
              onChangeText={text => props.setReview(text)}
              style={{marginTop: 10, marginBottom: 30, fontSize: 14}}
              multiline={true}
            />
          </View>
          <CustomButton label={'Submit'} />
        </CustomSurface>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  cardContainer: {
    padding: 20,
    paddingBottom: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  heading: {
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
  paragraph: {
    fontFamily: theme.font.regular,
    fontSize: 16,
  },
});

export default FeedbackView;

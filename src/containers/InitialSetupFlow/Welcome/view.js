import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import CustomSurface from '../../../components/Surface';
import theme from '../../../../theme';
import { InlineButton as Button } from '../../../components/Button';
const { height, width } = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const WelcomeView: () => React$Node = (props) => {
  // console.log('console in view -->',props.timerSecond.length)
  return (
    <View style={styles.container}>
      <CustomSurface style={styles.cardContainer}>
        <View>
          <Text style={styles.welcomeHeading}>Welcome</Text>
          <Text style={styles.paragraph}>
            we strongly recommend trading with a demo account or low risk trades
            at the beginning. Front Office is absolutely free for 14 days. A
            user is only charged after 14 days if they make a profit For more
            information see our Terms and Conditions.
          </Text>
        </View>
        <View style={styles.bottomActionWrapper}>
          <Text style={styles.durationText}>{`${props.timerDay} DAYS ${props.timerHour}:${props.timerMinute}:${props.timerSecond.length !== 1 ? props.timerSecond : `0${props.timerSecond}`}`}</Text>
          <Button label="Accept" onPress={props.onNext} />
        </View>
      </CustomSurface>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  cardContainer: {
    flex: 0.8,
    width: vw * 90,
    marginLeft: vw * 5,
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
    elevation: 4
  },
  headingContain: {
    marginBottom: 30,
  },
  welcomeHeading: {
    fontFamily: theme.font.bold,
    fontSize: 25,
    marginBottom: 30,
    textAlign: 'center',
  },
  paragraph: {
    fontFamily: theme.font.regular,
    marginHorizontal: 20,
    fontSize: 15,
  },
  durationText: {
    fontFamily: theme.font.bold,
    fontSize: 22,
    marginBottom: 10,
  },
});

export default WelcomeView;

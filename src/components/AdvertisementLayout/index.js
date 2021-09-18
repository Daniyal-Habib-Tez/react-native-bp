/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, ScrollView, Dimensions, SafeAreaView, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button, { InlineButton } from '../Button'
const { width, height } = Dimensions.get("window");
import { color, font } from '../../../theme'

const AdvertisementLayout = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.imageWrapper} >
            {
              props.screen === "IG"
                ? <Image source={require("../../assets/images/ig.png")} />
                : <Image source={require("../../assets/images/oanda.png")} />

            }
          </View>
          <View>
            <Text style={styles.heading} >
              {props.heading}
            </Text>
          </View>
          <View>
            <Text style={styles.text} >
              {props.text}
            </Text>
          </View>

          <View style={styles.action}>
            <View style={styles.actionChild}>
              <InlineButton style={{ width: '100%' }} labelStyle={{ fontSize: 10 }} mode="outlined" onPress={() => props.navigation.navigate('AdvertisementIG')} label="Create demo account" />
            </View>
            <View style={styles.actionChild}>
              <InlineButton style={{ width: '100%' }} labelStyle={{ fontSize: 10 }} onPress={() => { props.index < 3 ? _carousel.snapToNext() : props.navigation.navigate('AdvertisementIG') }} label="Create live account" />
            </View>
          </View>
          <View style={styles.clickWrapper} >
            <Text style={styles.clickTextBold} onPress={() => { props.screen === 'IG' ? props.navigation.navigate('AdvertisementOanda') : props.navigation.navigate('Signin') }} >
              {"SKIP"}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  body: {
    backgroundColor: Colors.white,
    minHeight: height,
    alignItems: "center",
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageWrapper: {
    marginTop: 30
  },
  inputWrapper: {
    flexDirection: "column"
  },
  heading: {
    fontSize: 18,
    marginTop: 39,
    color: color.secondary,
    textAlign: "left",
    width: 280,
    fontFamily: font.bold
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: color.secondary,
    textAlign: "left",
    width: 280,
    fontFamily: font.regular
  },
  action: {
    width: width - 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 20,
    marginTop: 20
  },
  actionChild: {
    width: (width - 40) * 0.4
  },
  clickWrapper: {
    position: "absolute",
    top: 16,
    right: 24
  },

  clickTextBold: {
    fontSize: 16,
    color: color.secondary,
    fontFamily: font.bold
  }
});

export default AdvertisementLayout;

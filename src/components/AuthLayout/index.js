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
import Button from '../Button'
const { height } = Dimensions.get("window");
import { color, font } from '../../../theme'

const AuthLayout = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={styles.scrollView}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.imageWrapper} >
              <Image source={require("../../assets/images/signin.png")} />
            </View>
            <View>
              <Text style={styles.heading} >
                {props.heading}
              </Text>
            </View>
            <View style={styles.inputWrapper} >
              {props.children}
            </View>
            <View style={styles.buttonWrapper} >
              <Button loading={props.loading} onPress={props.onPress} label={props.buttonLabel} />
            </View>
            <View style={props.page == 'Signup' ? {...styles.clickWrapper,marginTop:13} : styles.clickWrapper} >
              <Text style={styles.clickText} >
                {props.clickText}
              </Text>
              <Text style={styles.clickTextBold} onPress={() => props.onAuthToggle()} >
                {" Click Here"}
              </Text>
            </View>
          </View>
        </ScrollView>
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
    paddingHorizontal: 20
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
    color: color.primary,
    textAlign: "left",
    width: 280,
    fontFamily: font.semiBold
  },
  buttonWrapper: {
    marginTop: 25
  },
  clickWrapper: {
    flexDirection: "row",
    width: 280,
    marginTop: 20,
    paddingBottom: 20
  },
  clickText: {
    fontFamily: font.regular,
    fontSize: 13,
    color: color.primary
  },
  clickTextBold: {
    fontSize: 13,
    color: color.primary,
    fontFamily: font.bold
  }
});

export default AuthLayout;

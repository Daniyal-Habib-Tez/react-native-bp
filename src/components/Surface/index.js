import * as React from 'react';
import { Surface, Text } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const CustomSurface = (props) => (
  <Surface style={{ ...styles.surface, ...props.style }}>{props.children}</Surface>
);

export default CustomSurface;

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    // height: 80,
    width: "100%",
    elevation: 4,
    // backgroundColor: "#0000"
  },
});

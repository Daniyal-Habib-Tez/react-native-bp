import * as React from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';
import theme from '../../../theme';

const Indicator = () => (
  <ActivityIndicator animating={true} color={theme.color.primary} />
);

export default Indicator;
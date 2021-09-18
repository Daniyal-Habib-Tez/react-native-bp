import React, {useState, useContext} from 'react';
import {View} from 'react-native';
import AdvertisementIGView from './view';

const AdvertisementIG = props => {
  const viewProps = {
    ...props,
  };

  return <AdvertisementIGView {...viewProps} />;
};

export default AdvertisementIG;

import React, { useState, useContext } from 'react';
import { View } from 'react-native';
import AdvertisementOandaView from './view';

const AdvertisementOanda: () => React$Node = (props) => {

  const viewProps = {
    ...props
  };
  // console.log("nav", props.navigation)

  return <AdvertisementOandaView {...viewProps} />;
};

export default AdvertisementOanda;

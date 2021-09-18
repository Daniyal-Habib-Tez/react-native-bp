import React from 'react';
import { StyleSheet } from 'react-native';
import AdvertisementLayout from '../../../components/AdvertisementLayout';

const AdvertisementIGView: () => React$Node = (props) => {
  const layoutProps = {
    heading: 'Trading with No.1 platform',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna',
    screen: 'IG',
    ...props
  }
  return (
    <>
      <AdvertisementLayout {...layoutProps}></AdvertisementLayout>
    </>
  );
}


const styles = StyleSheet.create({
});


export default AdvertisementIGView
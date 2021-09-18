import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { InlineButton } from '../../../components/Button'

const { width } = Dimensions.get("window");

const IntroSliderView = (props) => {

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.innerSlide}>
          <Image style={styles.slideImage} source={{ uri: item.image }} resizeMode="contain" />
          <Text style={styles.slideTitle}>{item.title}</Text>
          <Text style={styles.slideContent}>{item.content}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.slidesContiner}>
      <Carousel
        ref={(c) => { _carousel = c; }}
        data={props.sliders}
        renderItem={renderItem}
        sliderWidth={width * 0.8}
        itemWidth={width * 0.8}
        layout={'default'}
        onSnapToItem={index => props.setIndex(index)}
      />
      <Pagination
        dotsLength={props.sliders.length}
        activeDotIndex={props.index}
        containerStyle={{ backgroundColor: 'rgb(255,255,255)' }}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 10,
          marginHorizontal: 4,
          backgroundColor: "#F86300"
        }}
        inactiveDotStyle={{
          backgroundColor: "#eee"
        }}
        dotColor={'rgb(248, 99, 0)'}
        inactiveDotOpacity={1}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
      <View style={styles.action}>
        <View>
          <InlineButton mode="text" onPress={() => props.navigation.navigate('AdvertisementIG')} label="Skip" />
        </View>
        <View>
          <InlineButton onPress={() => { props.index < 3 ? _carousel.snapToNext() : props.navigation.navigate('AdvertisementIG') }} label="Next" />
        </View>
      </View>
    </View>
  );
}

export default IntroSliderView

const styles = StyleSheet.create({
  slidesContiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  slide: {

    justifyContent: 'center',
    alignItems: 'center'
  },
  innerSlide: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slideImage: {
    width: width * 0.8,
    height: width * 0.8,
    marginBottom: 40
  },
  slideTitle: {
    textTransform: 'uppercase',
    marginBottom: 20,
    color: "#F86300",
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  slideContent: {
    textAlign: 'center',
    color: "#303030",
    fontSize: 17
  },
  highlighted: {
    color: "#F86300",
  },
  action: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 20
  }
})

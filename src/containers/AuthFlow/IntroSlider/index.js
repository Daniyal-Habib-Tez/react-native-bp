import React, { useState, useEffect } from 'react'
import IntroSliderView from './view';
import { connect } from 'react-redux';
import { onInitialDone } from '../../../store/actions/layoutActions';
import { setStorageItem } from '../../../utils';

const IntroSlider = (props) => {

  const [index, setIndex] = useState(0)
  const [sliders] = useState([
    {
      title: "Subscription",
      image: "https://res.cloudinary.com/n4beel/image/upload/v1597980909/slider-1_b540gw.png",
      content: "Front Office is absolutely free for 14 days, after which you will be asked to subscribe"
    },
    {
      title: "Connect Broker Account",
      image: "https://res.cloudinary.com/n4beel/image/upload/v1597980909/slider-2_sraxtf.png",
      content: "Front Office connects to your IG Markets or OANDA FX spreadbet account"
    },
    {
      title: "Select Risk Tolerence",
      image: "https://res.cloudinary.com/n4beel/image/upload/v1597980909/slider-3_pfjyxm.png",
      content: "Risk Management is key to portfolio management and trading, and our fully integrated tools are designed for you and protect your downside risk"

    },
    {
      title: "Grow Your Portfolio",
      image: "https://res.cloudinary.com/n4beel/image/upload/v1597980909/slider-4_newban.png",
      content: "Simply select your trades or markets, start the dynamic decision making algorithm and relax. In a few clicks you will be growing your portfolio"
    },
  ])

  useEffect(() => {
    props.setInitial()
    setStorageItem("Initial",true)
  }, [])

  const viewProps = {
    index,
    sliders,
    setIndex,
    ...props
  }

  return (
    <IntroSliderView {...viewProps} />
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setInitial: () => dispatch(onInitialDone()),
  };
};

export default connect(null, mapDispatchToProps)(IntroSlider)


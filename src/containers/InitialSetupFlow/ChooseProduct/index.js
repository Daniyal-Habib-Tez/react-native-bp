import React, {useState, useEffect} from 'react';
import ChooseProductView from './view';
import { getPlans } from '../../../store/actions/initialSetupActions';

const ChooseProduct: () => React$Node = (props) => {
  const cardDetails = [
    {
      productTitle: 'Automated Trading',
      productPrice: '£ 69.99/mo',
      productDuration: '3 Months',
      productRenew: 'Auto renew every 3 months',
    },
    {
      productTitle: 'Automated Trading',
      productPrice: '£ 274.95/mo',
      productDuration: '6 Months',
      productRenew: 'Auto renew every 6 months',
    },
    {
      productTitle: 'Automated Trading',
      productPrice: '£ 299.95/mo',
      productDuration: '12 Months',
      productRenew: 'Auto renew every 12 months',
    },
  ];

  const [selectedCard, setSelectedCard] = useState('');
  const [selectedIndex, setIndex] = useState(0);

  useEffect(() => {
    getPlans((res) => {
      console.log('success in plans -->',res)
    }, (err) => {
      console.log('err of plans -->',err)
    })
  },[])

  const onSelectCard = (card) => {
    const {id} = card;
    setIndex(id);
    delete card.id;
    setSelectedCard(card);
  };

  const navigateBack = () => {
    props.navigation.navigate("Welcome")
  }

  const navigateToFeatureList = () => {
    props.navigation.navigate("FeatureList")
  }

  const viewProps = {
    ...props,
    cardDetails,
    onSelectCard,
    selectedIndex,
    navigateBack,
    navigateToFeatureList
  };
  // console.log('nav', props.navigation);

  return <ChooseProductView {...viewProps} />;
};

export default ChooseProduct;

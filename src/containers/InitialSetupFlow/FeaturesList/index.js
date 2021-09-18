import React, {useState, useContext} from 'react';
import FeatureListView from './view';
import AutomatedIcon from '../../../assets/images/automations.png';
import BrainIcon from '../../../assets/images/brain.png';
import RiskIcon from '../../../assets/images/money.png';
import WorkIcon from '../../../assets/images/work.png';
import SearchIcon from '../../../assets/images/search.png';
import SalesIcom from '../../../assets/images/sales.png';
import BulbIcon from '../../../assets/images/lightbulb.png';

const FeatureList: () => React$Node = (props) => {
  const featureDetails = [
    {
      icon: AutomatedIcon,
      text: 'Fully Automated Trading',
    },
    {
      icon: BrainIcon,
      text: 'AI Driven Algorithm',
    },
    {
      icon: RiskIcon,
      text: 'Risk Management',
    },
    {
      icon: WorkIcon,
      text: 'Portfolio Optimization',
    },
    {
      icon: SearchIcon,
      text: 'Research',
    },
    {
      icon: SalesIcom,
      text: '14 Days Trial',
    },
    {
      icon: BulbIcon,
      text: 'Investment Ideas',
    },
  ];

  const navigateBack = () => {
    props.navigation.navigate('ChooseProduct');
  };

  const navigateToNext = () => {
    props.navigation.navigate('CreditCard');
  };

  const viewProps = {
    ...props,
    featureDetails,
    navigateBack,
    navigateToNext,
  };
  // console.log('nav', props.navigation);

  return <FeatureListView {...viewProps} />;
};

export default FeatureList;

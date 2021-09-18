import React from 'react';
import PolicyView from './view';

const Policy = props => {
  const cardDetails = [
    {
      policyTitle: 'Automated Trading',
      policyText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.',
    },
    {
      policyTitle: 'Automated Trading',
      policyText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.',
    },
    {
      policyTitle: 'Automated Trading',
      policyText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.',
    },
    {
      policyTitle: 'Automated Trading',
      policyText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.',
    },
    {
      policyTitle: 'Automated Trading',
      policyText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.',
    },
    {
      policyTitle: 'Automated Trading',
      policyText:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ex quidem esse voluptate labore rem quas quaerat inventore architecto voluptatem aperiam pariatur odio, in temporibus. Deserunt, cupiditate! Corporis, ducimus ratione.',
    },
  ];

  const viewProps = {
    ...props,
    cardDetails,
  };

  return <PolicyView {...viewProps} />;
};

export default Policy;

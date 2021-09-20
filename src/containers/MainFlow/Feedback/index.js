import React, {useState, useEffect} from 'react';
import FeedbackView from './view';
import PushNotification from 'react-native-push-notification';

const Feedback = props => {
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');

  useEffect(() => {
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'Welcome',
      message: 'Logged In!',
    });
  }, []);

  const viewProps = {
    ...props,
    rating,
    review,
    setReview,
    setRating,
  };

  return <FeedbackView {...viewProps} />;
};

export default Feedback;

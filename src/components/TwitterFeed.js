import React from 'react';
import Tweet from './Tweet.js'

const TwitterFeed = props => {
  let tweets = props.data.map(tweet => {
    let mediaUrl = '';
    if (tweet.entities.media) {
      mediaUrl = tweet.entities.media[0].media_url
    }
    return(
      <Tweet
        tweet={tweet}
        screen_name={tweet.user.screen_name}
        key={tweet.id_str}
        mediaImage={mediaUrl}
        date={tweet.timestamp_ms}
      />
    )
  })

    return (
      <div>
        {tweets}
      </div>
    )
};


export default TwitterFeed;

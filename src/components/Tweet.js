import React from 'react';

let handleReply = event => {
  alert("reply")
}

let handleRetweet = event => {
  alert("retweet")
}

let handleFavorite = event => {
  alert("like")
}

let handleMore = event => {
  alert("favorite")
}


const Tweet = props => {
  let name = props.tweet.user.name
  let screen_name = props.screen_name

  let favorited = props.tweet.favorited
  let favorite_heart;
  if (favorited) {
    favorite_heart = <i className="fa fa-heart red" aria-hidden="true" onClick={handleFavorite}></i>
  } else
    favorite_heart = <i className="fa fa-heart" aria-hidden="true" onClick={handleFavorite}></i>

  let retweeted = props.tweet.retweeted
  let retweet;
  if (retweeted) {
    retweet = <i className="fa fa-retweet green" aria-hidden="true" onClick={handleRetweet}></i>
  } else
    retweet = <i className="fa fa-retweet" aria-hidden="true" onClick={handleRetweet}></i>

  let strftime = require('strftime');
  let daymonth = strftime('%b %d', new Date(parseInt(props.date)));

  return(
    <div className="row callout single-tweet">
      <div className="image">
        <img src={props.tweet.user.profile_image_url}/>
      </div>
      <div className="basic-info">
        <span className = "info-one">
          {name}
        </span>
        <span className = "info-two">
          {screen_name}
        </span>
        <span className = "info-three">
          {daymonth}
        </span>
      </div>
      <div>
        {props.tweet.text}
      </div>
      <div className = "media-photos">
        <img src={props.mediaImage}/>
      </div>
      <div className = "icons">
        <span className = "favorite-bar">
          <i className="fa fa-reply" aria-hidden="true" onClick={handleReply}></i>
        </span>
        <span className = "favorite-bar-two">
          {retweet} {props.tweet.retweet_count}
        </span>
        <span className = "favorite-bar-three">
          {favorite_heart} {props.tweet.favorite_count}
        </span>
        <span className = "favorite-bar-four">
          <i className="fa fa-ellipsis-h" aria-hidden="true" onClick={handleMore}></i>
        </span>
      </div>
    </div>
  );
};

export default Tweet;

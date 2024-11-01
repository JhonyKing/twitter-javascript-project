function twitter() {
  const tweetList = [];

  const btnToSend = document.getElementById("btnSend");
  const newTweet = btnToSend.addEventListener("click", sendTweet);
  document.getElementById("tweet-list").addEventListener("click", deleteTweet);
  document.addEventListener("DOMContentLoaded", printTweets());

  function printTweets() {
    let tweetsLS = loadingTweetsLS();
    tweetsLS.forEach(function (tweet) {
      const li = document.createElement("li");
      li.textContent = tweet;

      //Create the anchor and appendding to the li
      const a = document.createElement("a");
      a.textContent = "X";
      a.classList.add("remove-tweet");
      li.appendChild(a);
      //Append the li to the tweet list
      document.getElementById("tweet-list").appendChild(li);
    });
  }

  function loadingTweetsLS() {
    let tweets;
    const tweetsLS = localStorage.getItem("tweets");
    if (tweetsLS === null) {
      tweets = [];
    } else {
      tweets = JSON.parse(tweetsLS);
    }
    return tweets;
  }

  function sendTweet(e) {
    e.preventDefault;
    if (document.getElementById("tweet").value === "") {
      alert("Input some tweet");
      return;
    }
    const newTweet = document.getElementById("tweet").value;
    const li = document.createElement("li");
    li.textContent = newTweet;

    //Create the anchor and appendding to the li
    const a = document.createElement("a");
    a.textContent = "X";
    a.classList.add("remove-tweet");
    li.appendChild(a);
    //Append the li to the tweet list
    document.getElementById("tweet-list").appendChild(li);
    tweetList.push(newTweet);
    //Reseting the textarea
    document.getElementById("tweet").value = "";

    addTweetLS(newTweet);
  }

  function addTweetLS(newTweet) {
    let tweets = loadingTweetsLS();
    tweets.push(newTweet);
    console.log(tweets);
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }

  function deleteTweet(e) {
    if (e.target.classList.contains("remove-tweet")) {
      deleteTweetfromLS(e.target.parentElement.textContent);
      e.target.parentElement.remove();
    }
  }

  function deleteTweetfromLS(tweet) {
    tweet = tweet.substring(0, tweet.length - 1);
    let tweets = loadingTweetsLS();
    tweets.forEach(function (tweetLS, index) {
      if (tweet === tweetLS) {
        tweets.splice(index, 1);
      }
    });
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }
}

twitter();

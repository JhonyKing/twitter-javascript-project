function twitter() {
  const tweetList = [];

  const btnToSend = document.getElementById("btnSend");
  const newTweet = btnToSend.addEventListener("click", sendTweet);
  document.getElementById("tweet-list").addEventListener("click", deleteTweet);

  function loadingTweetsLS() {
    let tweets;
    const tweetsLS = localStorage.getItem("tweetsLS");
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

    addTweetLS();
  }

  function addTweetLS(newTweet) {
    let tweets = loadingTweetsLS();
  }

  function deleteTweet(e) {
    if (e.target.classList.contains("remove-tweet")) {
      e.target.parentElement.remove();
    }
  }
}

twitter();

document.addEventListener("DOMContentLoaded", function() {
    const wpmSpan = document.getElementById("wpm");
    const accuracySpan = document.getElementById("accuracy");
  
    // Function to get the value of a cookie by name
    function getCookie(name) {
      const cookies = document.cookie.split("; ");
      for (let cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
          return decodeURIComponent(cookieValue);
        }
      }
      return null;
    }
  
    // Get the user's score from the cookie named 'userScore'
    const userScore = getCookie('userScore');
  
    // Update the elements on the page with the retrieved score data
    if (userScore !== null) {
      const scoreData = JSON.parse(userScore);
      wpmSpan.innerText = scoreData.wpm;
      accuracySpan.innerText = scoreData.accuracy;
    }
  });
  
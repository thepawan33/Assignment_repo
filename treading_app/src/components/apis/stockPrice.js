function fetchDta() {
  fetch(
    `https://api.twelvedata.com/quote?symbol=AAPL&apikey=02654dcade27437bb80b10b2c51c7b40`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

export { fetchDta };

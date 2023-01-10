function getParsy() {
  fetch("dow.json")
    .then((response) => response.text())
    .then((jsonString) => {
      const data = JSON.parse(jsonString);

      const results = {};

      for (const item of data) {
        if (!results[item.symbol]) {
          results[item.symbol] = {
            dates: [],
            closes: [],
          };
        }
        results[item.symbol].dates.push(item.date);
        results[item.symbol].closes.push(item.close);
      }
      const aaplDates = results.AAPL.dates.reverse();
      const aaplCloses = results.AAPL.closes.reverse();
      console.log(aaplDates);
      console.log(aaplCloses);
    });
}

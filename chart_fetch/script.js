function updateChart() {
  async function fetchData() {
    const url = "financials.json";
    const response = await fetch(url);
    const datapoints = await response.json();
    // console.log(datapoints);
    return datapoints;
  }
  fetchData().then((datapoints) => {
    const month = datapoints.financialreport[0].financials.map(function (
      index
    ) {
      return index.date;
    });
    const revenue = datapoints.financialreport[0].financials.map(function (
      index
    ) {
      return index.revenue;
    });
    const companyname = datapoints.financialreport.map(function (index) {
      return index.companyname;
    });
    myChart.config.data.datasets[0].label = companyname[0];
    myChart.config.data.labels = month;
    myChart.config.data.datasets[0].data = revenue;
    myChart.update();
  });
}

const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(0, 0, 0, 0.2)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(0, 0, 0, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "bar",
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// render init block
const myChart = new Chart(document.getElementById("myChart"), config);

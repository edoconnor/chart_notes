const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "close",
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
    },
  ],
};

const data2 = {
  labels: ["Green", "Purple", "Orange", "Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "close",
      data: [5, 2, 3, 9, 11, 17],
      borderWidth: 1,
    },
  ],
};

const data3 = {
    labels: ["Green", "Purple", "Orange", "Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "close",
        data: [19, 11, 3, 7, 10, 19],
        borderWidth: 1,
      },
    ],
  };

const config = {
  type: "line",
  data: data2,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const config2 = {
  type: "line",
  data: data3,
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

const config3 = {
    type: "line",
    data,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };

const mmm_chart = new Chart(document.getElementById("mmm_chart"), config);

const lineChart = new Chart(document.getElementById("axp_chart"), config2);

const amgn_chart = new Chart(document.getElementById("amgn_chart"), config3);

const aapl_chart = new Chart(document.getElementById("aapl_chart"), config3);

const ba_chart = new Chart(document.getElementById("ba_chart"), config);

const cat_chart = new Chart(document.getElementById("cat_chart"), config2);

const cvx_chart = new Chart(document.getElementById("cvx_chart"), config2);

const csco_chart = new Chart(document.getElementById("csco_chart"), config);

const ko_chart = new Chart(document.getElementById("ko_chart"), config3);


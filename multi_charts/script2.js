const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
    },
  ],
};

const config = {
  type: "bar",
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

const config2 = {
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

const datapie = {
  labels: ["Red", "Blue", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [9, 10, 13],
      borderWidth: 1,
    },
  ],
  options: {
    responsive: true,
  },
};

const configpie = {
  type: "pie",
  data: datapie,
  options: {},
};

const pieChart = new Chart(document.getElementById("pieChart"), configpie);

const lineChart = new Chart(document.getElementById("lineChart"), config2);
const myChart = new Chart(document.getElementById("myChart"), config);

function fetchData() {
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

      const mmmDates = results.MMM.dates.reverse();
      const mmmCloses = results.MMM.closes.reverse();

      const axpDates = results.AXP.dates.reverse();
      const axpCloses = results.AXP.closes.reverse();

      const amgnDates = results.AMGN.dates.reverse();
      const amgnCloses = results.AMGN.closes.reverse();

      const aaplDates = results.AAPL.dates.reverse();
      const aaplCloses = results.AAPL.closes.reverse();

      const baDates = results.BA.dates.reverse();
      const baCloses = results.BA.closes.reverse();

      const catDates = results.CAT.dates.reverse();
      const catCloses = results.CAT.closes.reverse();

      const cvxDates = results.CVX.dates.reverse();
      const cvxCloses = results.CVX.closes.reverse();

      const cscoDates = results.CSCO.dates.reverse();
      const cscoCloses = results.CSCO.closes.reverse();

      const koDates = results.KO.dates.reverse();
      const koCloses = results.KO.closes.reverse();

      const disDates = results.DIS.dates.reverse();
      const disCloses = results.DIS.closes.reverse();

      const dowDates = results.DOW.dates.reverse();
      const dowCloses = results.DOW.closes.reverse();

      const gsDates = results.GS.dates.reverse();
      const gsCloses = results.GS.closes.reverse();

      const hdDates = results.HD.dates.reverse();
      const hdCloses = results.HD.closes.reverse();

      const honDates = results.HON.dates.reverse();
      const honCloses = results.HON.closes.reverse();

      const ibmDates = results.IBM.dates.reverse();
      const ibmCloses = results.IBM.closes.reverse();

      const intcDates = results.INTC.dates.reverse();
      const intcCloses = results.INTC.closes.reverse();

      const jnjDates = results.JNJ.dates.reverse();
      const jnjCloses = results.JNJ.closes.reverse();

      const jpmDates = results.JPM.dates.reverse();
      const jpmCloses = results.JPM.closes.reverse();

      const mcdDates = results.MCD.dates.reverse();
      const mcdCloses = results.MCD.closes.reverse();

      const mrkDates = results.MRK.dates.reverse();
      const mrkCloses = results.MRK.closes.reverse();

      const msftDates = results.MSFT.dates.reverse();
      const msftCloses = results.MSFT.closes.reverse();

      const nkeDates = results.NKE.dates.reverse();
      const nkeCloses = results.NKE.closes.reverse();

      const pgDates = results.PG.dates.reverse();
      const pgCloses = results.PG.closes.reverse();

      const crmDates = results.CRM.dates.reverse();
      const crmCloses = results.CRM.closes.reverse();

      const trvDates = results.TRV.dates.reverse();
      const trvCloses = results.TRV.closes.reverse();

      const unhDates = results.UNH.dates.reverse();
      const unhCloses = results.UNH.closes.reverse();

      const vzDates = results.VZ.dates.reverse();
      const vzCloses = results.VZ.closes.reverse();

      const vDates = results.V.dates.reverse();
      const vCloses = results.V.closes.reverse();

      const wbaDates = results.WBA.dates.reverse();
      const wbaCloses = results.WBA.closes.reverse();

      const wmtDates = results.WMT.dates.reverse();
      const wmtCloses = results.WMT.closes.reverse();

      const mmm_data = {
        labels: [...mmmDates],
        datasets: [
          {
            label: "MMM",
            data: [...mmmCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_mmm = {
        type: "line",
        data: mmm_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const axp_data = {
        labels: [...axpDates],
        datasets: [
          {
            label: "AXP",
            data: [...axpCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_axp = {
        type: "line",
        data: axp_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const amgn_data = {
        labels: [...amgnDates],
        datasets: [
          {
            label: "AMGN",
            data: [...amgnCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_amgn = {
        type: "line",
        data: amgn_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const aapl_data = {
        labels: [...aaplDates],
        datasets: [
          {
            label: "AAPL",
            data: [...aaplCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_aapl = {
        type: "line",
        data: aapl_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const ba_data = {
        labels: [...baDates],
        datasets: [
          {
            label: "BA",
            data: [...baCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_ba = {
        type: "line",
        data: ba_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const cat_data = {
        labels: [...catDates],
        datasets: [
          {
            label: "CAT",
            data: [...catCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_cat = {
        type: "line",
        data: cat_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const cvx_data = {
        labels: [...cvxDates],
        datasets: [
          {
            label: "CVX",
            data: [...cvxCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_cvx = {
        type: "line",
        data: cvx_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const csco_data = {
        labels: [...cscoDates],
        datasets: [
          {
            label: "CSCO",
            data: [...cscoCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_csco = {
        type: "line",
        data: csco_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const ko_data = {
        labels: [...koDates],
        datasets: [
          {
            label: "KO",
            data: [...koCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_ko = {
        type: "line",
        data: ko_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const dis_data = {
        labels: [...disDates],
        datasets: [
          {
            label: "DIS",
            data: [...disCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_dis = {
        type: "line",
        data: dis_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const dow_data = {
        labels: [...dowDates],
        datasets: [
          {
            label: "DOW",
            data: [...dowCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_dow = {
        type: "line",
        data: dow_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const gs_data = {
        labels: [...gsDates],
        datasets: [
          {
            label: "GS",
            data: [...gsCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_gs = {
        type: "line",
        data: gs_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const hd_data = {
        labels: [...hdDates],
        datasets: [
          {
            label: "HD",
            data: [...hdCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_hd = {
        type: "line",
        data: hd_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const hon_data = {
        labels: [...honDates],
        datasets: [
          {
            label: "HON",
            data: [...honCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_hon = {
        type: "line",
        data: hon_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const ibm_data = {
        labels: [...ibmDates],
        datasets: [
          {
            label: "IBM",
            data: [...ibmCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_ibm = {
        type: "line",
        data: ibm_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const intc_data = {
        labels: [...intcDates],
        datasets: [
          {
            label: "INTC",
            data: [...intcCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_intc = {
        type: "line",
        data: intc_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const jnj_data = {
        labels: [...jnjDates],
        datasets: [
          {
            label: "JNJ",
            data: [...jnjCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_jnj = {
        type: "line",
        data: jnj_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const jpm_data = {
        labels: [...jpmDates],
        datasets: [
          {
            label: "JPM",
            data: [...jpmCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_jpm = {
        type: "line",
        data: jpm_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const mcd_data = {
        labels: [...mcdDates],
        datasets: [
          {
            label: "MCD",
            data: [...mcdCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_mcd = {
        type: "line",
        data: mcd_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const mrk_data = {
        labels: [...mrkDates],
        datasets: [
          {
            label: "MRK",
            data: [...mrkCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_mrk = {
        type: "line",
        data: mrk_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const msft_data = {
        labels: [...msftDates],
        datasets: [
          {
            label: "MSFT",
            data: [...msftCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_msft = {
        type: "line",
        data: msft_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const nke_data = {
        labels: [...nkeDates],
        datasets: [
          {
            label: "NKE",
            data: [...nkeCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_nke = {
        type: "line",
        data: nke_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const pg_data = {
        labels: [...pgDates],
        datasets: [
          {
            label: "PG",
            data: [...pgCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_pg = {
        type: "line",
        data: pg_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const crm_data = {
        labels: [...crmDates],
        datasets: [
          {
            label: "CRM",
            data: [...crmCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_crm = {
        type: "line",
        data: crm_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const trv_data = {
        labels: [...trvDates],
        datasets: [
          {
            label: "TRV",
            data: [...trvCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_trv = {
        type: "line",
        data: trv_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const unh_data = {
        labels: [...unhDates],
        datasets: [
          {
            label: "UNH",
            data: [...unhCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_unh = {
        type: "line",
        data: unh_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const vz_data = {
        labels: [...vzDates],
        datasets: [
          {
            label: "VZ",
            data: [...vzCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_vz = {
        type: "line",
        data: vz_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const v_data = {
        labels: [...vDates],
        datasets: [
          {
            label: "V",
            data: [...vCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_v = {
        type: "line",
        data: v_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const wba_data = {
        labels: [...wbaDates],
        datasets: [
          {
            label: "WBA",
            data: [...wbaCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_wba = {
        type: "line",
        data: wba_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const wmt_data = {
        labels: [...wmtDates],
        datasets: [
          {
            label: "WMT",
            data: [...wmtCloses],
            borderWidth: 1,
            lineTension: 0.4,   
            fill: {
              target: 'start',
              above: '#dcfce7'    
            },
          },
        ],
      };

      const config_wmt = {
        type: "line",
        data: wmt_data,
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: false,
            },
          },
        },
      };

      const mmm_chart = new Chart(
        document.getElementById("mmm_chart"),
        config_mmm
      );

      const lineChart = new Chart(
        document.getElementById("axp_chart"),
        config_axp
      );

      const amgn_chart = new Chart(
        document.getElementById("amgn_chart"),
        config_amgn
      );

      const aapl_chart = new Chart(
        document.getElementById("aapl_chart"),
        config_aapl
      );

      const ba_chart = new Chart(
        document.getElementById("ba_chart"),
        config_ba
      );

      const cat_chart = new Chart(
        document.getElementById("cat_chart"),
        config_cat
      );

      const cvx_chart = new Chart(
        document.getElementById("cvx_chart"),
        config_cvx
      );

      const csco_chart = new Chart(
        document.getElementById("csco_chart"),
        config_csco
      );

      const ko_chart = new Chart(
        document.getElementById("ko_chart"),
        config_ko
      );

      const dis_chart = new Chart(
        document.getElementById("dis_chart"),
        config_dis
      );

      const dow_chart = new Chart(
        document.getElementById("dow_chart"),
        config_dow
      );

      const gs_chart = new Chart(
        document.getElementById("gs_chart"),
        config_gs
      );

      const hd_chart = new Chart(
        document.getElementById("hd_chart"),
        config_hd
      );

      const hon_chart = new Chart(
        document.getElementById("hon_chart"),
        config_hon
      );

      const ibm_chart = new Chart(
        document.getElementById("ibm_chart"),
        config_ibm
      );

      const intc_chart = new Chart(
        document.getElementById("intc_chart"),
        config_intc
      );

      const jnj_chart = new Chart(
        document.getElementById("jnj_chart"),
        config_jnj
      );

      const jpm_chart = new Chart(
        document.getElementById("jpm_chart"),
        config_jpm
      );

      const mcd_chart = new Chart(
        document.getElementById("mcd_chart"),
        config_mcd
      );

      const mrk_chart = new Chart(
        document.getElementById("mrk_chart"),
        config_mrk
      );

      const msft_chart = new Chart(
        document.getElementById("msft_chart"),
        config_msft
      );

      const nke_chart = new Chart(
        document.getElementById("nke_chart"),
        config_nke
      );

      const pg_chart = new Chart(
        document.getElementById("pg_chart"),
        config_pg
      );

      const crm_chart = new Chart(
        document.getElementById("crm_chart"),
        config_crm
      );

      const trv_chart = new Chart(
        document.getElementById("trv_chart"),
        config_trv
      );

      const unh_chart = new Chart(
        document.getElementById("unh_chart"),
        config_unh
      );

      const vz_chart = new Chart(
        document.getElementById("vz_chart"),
        config_vz
      );

      const v_chart = new Chart(document.getElementById("v_chart"), config_v);

      const wba_chart = new Chart(
        document.getElementById("wba_chart"),
        config_wba
      );

      const wmt_chart = new Chart(
        document.getElementById("wmt_chart"),
        config_wmt
      );
    });
}

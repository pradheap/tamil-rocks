
<template>
<div class="container">
  <b-alert
      class="mt-3"
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>{{alertMsg}}</p>
    </b-alert>
    <div class="row justify-content-center p-4">
      <InputText
          v-model="newTodoText"
          placeholder="காற்புள்ளியால் பிரித்த சொற்றடர்களை நிரப்புக"
          @keydown.enter="search"/>
    </div>
    <div class="row justify-content-center">
      <chart v-if="showChart" :chart-data="datacollection" :options="chartoptions" :width="600"/>
      <p v-else>Sorry, there is no sufficient data to display :(</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import InputText from '@/components/InputText.vue';
import chart from '@/components/chart.vue';

const NGRAM_API = 'http://localhost:8080/ngram';

export default {
  data() {
    return {
      dismissSecs: 10,
      dismissCountDown: 0,
      showChart: true,
      alertMsg: '',
      newTodoText: 'வந்தியத்தேவனும் ஆழ்வார்க்கடியானும், பெரிய பழுவேட்டரையர்',
      datacollection: null,
      chartoptions: null,
    };
  },
  props: ['data', 'options'],
  components: {
    InputText,
    chart,
  },
  mounted() {
    this.fillData();
    this.chartoptions = {
      title: {
        text: 'Tamil Ngram Viewer',
      },
      legend: {
        labels: {
          fontFamily: "'Mukta Malar' sans-serif",
        },
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 14, fontFamily: "'Mukta Malar', sans-serif", fontColor: '#000', fontStyle: '400',
          },
        }],
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
            },
            ticks: {
              callback: function(value, index, values) {
                return `${value} %`;
              }
            }
          },
        ],
      },
    };
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
    showAlert(msg) {
      this.alertMsg = msg;
      this.dismissCountDown = this.dismissSecs;
    },
    search() {
      if (this.newTodoText.split(',').length > 3) {
        this.showAlert('Only upto 3 phrases are supported right now.');
        return;
      }
      axios
        .post(NGRAM_API, {
          ngrams: this.newTodoText,
        }).then((res) => {
          let labels = '';
          const dataSets = [];
          const colors = ['red', 'blue', 'green'];
          let i = 0;

          Object.keys(res.data).forEach((key) => {
            if (!labels) {
              labels = Object.keys(res.data[key]);
            }
            dataSets.push({
              label: key,
              data: Object.values(res.data[key]),
              borderColor: colors[i],
              lineTension: 0.1,
              fill: false,
            });
            i += 1;
          });
          console.log(dataSets);
          if (dataSets.length === 0) {
            this.showChart = false;
          } else {
            this.showChart = true;
          }
          this.datacollection = {
            labels,
            datasets: Object.values(dataSets),
          };
        });
    },
    fillData() {
      this.datacollection = {
        labels: [
          '1952',
          '1953',
          '1954',
          '1955',
          '1956',
        ],
        datasets: [
          {
            label: 'வந்தியத்தேவனும் ஆழ்வார்க்கடியானும்',
            borderColor: '#78f979',
            lineTension: 0.1,
            fill: false,
            data: [0.0034, 0.002, 0.01, 0.004, 0.004],
          },
          {
            label: 'பெரிய பழுவேட்டரையர்',
            borderColor: '#f87979',
            fill: false,
            lineTension: 0.1,
            data: [0.0084, 0.012, 0.01, 0.008, 0.004],
          },
        ],
      };
    },
  },
};
</script>

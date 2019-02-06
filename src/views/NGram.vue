
<template>
<div class="container">
    <div class="row justify-content-center p-4">
      <InputText
          v-model="newTodoText"
          placeholder="காற்புள்ளியால் பிரித்த சொற்றடர்களை நிரப்புக"
          @keydown.enter="addTodo"/>
    </div>
    <div class="row justify-content-center">
      <chart :chart-data="datacollection" :options="chartoptions" :width="600"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import InputText from '@/components/InputText.vue';
import chart from '@/components/chart.vue';

export default {
  data() {
    return {
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
        text: 'Custom Chart Title',
      },
      legend: {
        labels: {
          fontFamily: "'Mukta Malar' sans-serif",
        },
      },
      scales: {
        xAxes: [{
          ticks: {
            fontSize: 14, fontFamily: "'Mukta Malar', sans-serif", fontColor: '#000', fontStyle: '400',
          },
        }],
      },
    };
  },
  methods: {
    addTodo() {
      axios
        .get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log('Hello World!', res);
        });
    },
    fillData() {
      this.datacollection = {
        labels: [
          'பொன்னியின் செல்வன் 1',
          'பொன்னியின் செல்வன் 2',
          'பொன்னியின் செல்வன் 3',
          'பொன்னியின் செல்வன் 4',
          'பொன்னியின் செல்வன் 5',
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
            data: [0.0084, 0.012, 0.01, 0.018, 0.004],
          },
        ],
      };
    },
  },
};
</script>

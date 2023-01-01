<template>
    <div class="progress-tracking">
      <h1>Progress Tracking</h1>
      <p>You have studied a total of {{ totalFlashcards }} flashcards in {{ totalTime }} minutes.</p>
      <canvas id="progressChart" width="400" height="400"></canvas>
    </div>
  </template>
  
  <script>
//   import Chart from 'chart.js'
  
  export default {
    name: 'StatistcsView',
    data() {
      return {
        flashcardHistory: [], // array of objects with information about each study session
        totalFlashcards: 0, // total number of flashcards studied
        totalTime: 0, // total time spent studying in minutes
      }
    },
    mounted() {
      // code to calculate the totalFlashcards and totalTime values
      // using the data in the flashcardHistory array
    },
    methods: {
      drawChart() {
        // code to create a Chart.js chart showing the progress over time
        // using the data in the flashcardHistory array
      },
    },
    created() {
      this.drawChart()
    },
  }
  </script>
  
  <style>
  .progress-tracking {
    text-align: center;
    margin: 50px;
  }
  canvas {
    display: block;
    margin: 20px auto;
  }
  </style>
  
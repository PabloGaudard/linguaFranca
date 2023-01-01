<template>
    <div class="flashcard-study">
      <h1>Study Flashcards</h1>
      <p v-if="currentFlashcard">{{ currentFlashcard.target }}</p>
      <button @click="showTranslation" v-if="currentFlashcard">Show translation</button>
      <p v-if="currentFlashcard && showTranslation">{{ currentFlashcard.translation }}</p>
      <button @click="nextFlashcard" v-if="currentFlashcard">Next flashcard</button>
      <p v-if="!currentFlashcard">No more flashcards to study!</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StudyView',
    data() {
      return {
        flashcards: [], // array of flashcards to study
        currentFlashcardIndex: 1, // index of the current flashcard
        showTranslation: false, // flag to control whether the translation is shown
      }
    },
    computed: {
      currentFlashcard() {
        return this.flashcards[this.currentFlashcardIndex]
      },
    },
    methods: {
    //   showTranslation() {
    //     this.showTranslation = true
    //   },
      nextFlashcard() {
        this.currentFlashcardIndex++
        this.showTranslation = false
        if (this.currentFlashcardIndex >= this.flashcards.length) {
          this.currentFlashcardIndex = 0
        }
      },
    },
  }
  </script>
  
  <style>
  .flashcard-study {
    text-align: center;
    margin: 50px;
  }
  p {
    font-size: 24px;
  }
  button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  button:hover {
    background-color: #45a049;
  }
  </style>
  
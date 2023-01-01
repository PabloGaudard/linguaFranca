<template>
  <div class="language-selection">
    <h1>Choose a Language</h1>
    <p>Select the language you want to learn:</p>
    <ul>
      <li v-for="language in languages" :key="language.code">
        <button @click="selectLanguage(language)">{{ language.name }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      languages: [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        { code: 'de', name: 'German' },
      ],
    }
  },
  methods: {
    selectLanguage(
      // language
      ) {
      // code to set the selected language in the user's account and redirect to the flashcard creation page
    },
  },
}
</script>

<style>
.language-selection {
  text-align: center;
  margin: 50px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 10px;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}
button:hover {
  background-color: #45a049;
}
</style>

<template>
    <div class="community-features">
      <h1>Community Features</h1>
      <p>Join the discussion in the forums:</p>
      <ul>
        <li v-for="forum in forums" :key="forum.id">
          <router-link :to="'/forums/' + forum.id">{{ forum.title }}</router-link>
        </li>
      </ul>
      <p>Find language exchange partners:</p>
      <form @submit.prevent="findPartners">
        <label for="language">Language:</label>
        <select id="language" v-model="language" required>
          <option value=""></option>
          <option v-for="language in languages" :key="language.code">{{ language.name }}</option>
        </select>
        <br>
        <button type="submit">Find partners</button>
      </form>
      <ul v-if="partners.length > 0">
        <li v-for="partner in partners" :key="partner.id">
          {{ partner.name }} ({{ partner.language }})
          <button @click="sendMessage(partner)">Send message</button>
        </li>
      </ul>
      <p v-if="partners.length === 0">No partners found.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ForumView',
    data() {
      return {
        forums: [], // array of forum objects
        languages: [], // array of language objects
        language: '', // selected language
        partners: [], // array of partner objects
      }
    },
    methods: {
      findPartners() {
        // code to search for partners who speak the selected language
        // and populate the partners array
      },
      sendMessage() {
        // code to send a message to the given partner
      },
    },
  }
  </script>
  
  <style>
  .community-features {
    text-align: center;
    margin: 50px;
  }
  form {
    display: inline-block;
    text-align: left;
    margin: 20px;
    padding: 20px;
    border: 2px solid #ccc;
    border-radius: 5px;
  }
  label {
    display: block;
    margin: 10px 0;
  }
  select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button[type="submit"] {
    width: 100%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button[type="submit"]:hover {
    background-color: #45a049
  }
  </style>  
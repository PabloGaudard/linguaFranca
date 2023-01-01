<template>
  <div class="home-page">
    <h1>Welcome to the Language Learning Flashcard Website!</h1>
    <p>Here, you can create and study flashcards to help you learn a new language.</p>
    <p>To get started, please log in or sign up for an account:</p>
    <form>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <br>
      <button type="submit" class="button" @click="login">Log in</button>
      <button type="button" class="button" @click="signUp">Sign up</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      // code to log in the user using the email and password
    },
    signUp() {
      // code to sign up the user using the email and password
    },
  },
}
</script>

<style scoped>
.home-page {
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
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button[type="submit"],
button[type="button"] {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="submit"]:hover,
button[type="button"]:hover {
  background-color: #45a049;
}
</style>
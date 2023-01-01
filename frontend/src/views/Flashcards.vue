<template>
    <div class="flashcard-creation">


        <Flashcard></Flashcard>



        <h1>Create Flashcards</h1>
        <p>Enter a word or phrase in the target language and its translation in your native language:</p>
        <form @submit.prevent="addFlashcard">
            <label for="target">Target language:</label>
            <input type="text" id="target" v-model="target" required>
            <br>
            <label for="translation">Translation:</label>
            <input type="text" id="translation" v-model="translation" required>
            <br>
            <button type="submit">Add flashcard</button>
        </form>
        <h2>Flashcard deck:</h2>
        <ul>
            <li v-for="flashcard in flashcards" :key="flashcard.id">
                {{ flashcard.target }} - {{ flashcard.translation }}
                <button @click="deleteFlashcard(flashcard)">Delete</button>
            </li>
        </ul>
        <button @click="saveFlashcards">Save flashcards</button>
    </div>
</template>
  
<script>
import Flashcard from '@/components/Flashcard.vue';

export default {
    name: 'FlashcardsView',
    components:{
        Flashcard
    },
    data() {
        return {
            target: '',
            translation: '',
            flashcards: [],
        }
    },
    methods: {
        addFlashcard() {
            // code to add a new flashcard to the flashcards array
            // using the target and translation values
        },
        deleteFlashcard() {
            // code to delete the specified flashcard from the flashcards array
        },
        saveFlashcards() {
            // code to save the flashcards to the user's account and redirect to the flashcard study page
        },
    },
}
</script>
  
<style lang="scss">
.flashcard-creation {
    text-align: center;
    margin: 50px;

    form {
        display: inline-block;
        text-align: left;
        margin: 20px;
        padding: 20px;
        border: 2px solid #ccc;
        border-radius: 5px;

        label {
            display: block;
            margin: 10px 0;
        }

        input[type="text"] {
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

            &:hover {
                background-color: #45a049;
            }
        }
    }

    ul {
        list-style: none;
        margin: 20px 0;
        padding: 0;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 10px 0;

            button {
                background-color: #f44336;
                color: white;
                padding: 12px 20px;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;

                &:hover {
                    background-color: #dc3545;
                }
            }
        }
    }
}
</style>

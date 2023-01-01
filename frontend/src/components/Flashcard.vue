<template>

    <div class="flashcard" @click="flip()" v-bind:class="{ flipped }">
        <div class="flashcard-inner">
            <div class="flashcard-front" @click="speak(data.expression)" v-bind:style="{backgroundColor: data.bgColor}">
                <img v-bind:src="data.icon" alt="Flashcard Icon">
                <p class="expression">{{ data.expression }}</p>
            </div>
            <div class="flashcard-back" @click="speak(data.example)" v-bind:style="{backgroundColor: data.bgColor}">
                <img v-bind:src="data.icon" alt="Flashcard Icon">
                <p class="meaning">{{ data.meaning }}</p>
                <p class="example">{{ data.example }}</p>
            </div>
        </div>
    </div>

</template>

<style lang="scss">
.flashcard {
    width: 200px;
    perspective: 1000px;

    &.flipped &-inner {
        transform: rotateY(180deg);
    }

    &-inner {
        position: relative;
        width: 100%;
        aspect-ratio: 5 / 6;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
    }

    &-front,
    &-back {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        border-radius: 10px;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        cursor: pointer;

        img {
            width: 25%;
            margin-bottom: 5%;
            aspect-ratio: 1 / 1;
            object-fit: contain;
        }
    }

    &-front {
        z-index: 2;
    }

    &-back {
        transform: rotateY(180deg);
    }

    .expression,
    .meaning {
        font-size: 1.5rem;
    }

    .example {
        margin-top: 2.5%;
        opacity: 0.9;
    }
}
</style>

<script>
export default {
    props: ["data"],
    name: 'FlashcardView',
    data() {
        return {
            flipped: this.data.flipped
        }
    },
    methods: {
        flip() {
            this.flipped = !this.flipped
        },
        speak(text) {
            const synth = window.speechSynthesis
            const utterance = new SpeechSynthesisUtterance(text)
            utterance.lang = this.data.lang;
            synth.speak(utterance)
        }
    }
}
</script>
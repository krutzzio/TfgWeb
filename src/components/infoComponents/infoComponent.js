export default {
    data() {
        return {
            Answered: false,
            index: this.$route.params.index,
            fomoReceiver: this.$route.params.fomoLv,
            selectedAns: ' ',
            questions: [
                {
                    question: "unta 1 1Pregunta 1 1u1Pregunta 1 1",
                    answer: { a: 'AAAA', b: 'BBBB', c: 'CCCC', d: 'DDDD' },
                    correct: 'b',
                },
                {
                    question: "Pregunta 2",
                    answer: { a: 'A', b: 'B', c: 'C', d: 'D' },
                    correct: 'a',
                }

            ],
        }

    },
    methods: {
        selected(c) {
            this.selectedAns = c.target.value;
            this.Answered = true;
        },
        incrementIndex() {
            this.index++;
        }

    }
}
export default {
    data() {
        return {
            imagen1: "@/assets/cara_ejemplo1.jpg",
            Answered: false,
            index: this.$route.params.index,
            fomoReceiver: this.$route.params.fomoLv,
            selectedAns: ' ',
            questions: [
                {
                    question: "Què signifiquen les sigles de FoMo?",
                    answer: { a: 'Friends of Marco organization', b: 'Fear of Missing out', c: 'Fathers out, Mothers out', d: 'Financial oportunity Missed out' },
                    correct: 'b',
                },
                {
                    question: "",
                    answer: { a: 'A', b: 'B', c: 'C', d: 'D' },
                    correct: 'd',
                },
                {
                    question: "Pregunta 3",
                    answer: { a: 'A', b: 'B', c: 'C', d: 'D' },
                    correct: 'd',
                }

            ],

            sabies: [
                "Gastem més de 6:30 hores diarament a internet a arreu el món. A Espanya, en particular, la mitja és una mica més baixa però supera les 5:30 hores.",
                "LOREM 2",
                "LOREM 3"
            ]
        }

    },
    methods: {
        selected(c) {
            this.selectedAns = c.target.value;
            this.Answered = true;
        },
        incrementIndex() {
            this.index++;

            this.$router.push({
                name: 'intro', params: {
                    index: this.index,
                    fomo: this.fomoReceiver,
                }
            })
        },

    }
}
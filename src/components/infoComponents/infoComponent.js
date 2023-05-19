export default {
    data() {
        return {
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
                    question: "El FoMo és:",
                    answer: { a: "La sensació d'ansietat que es produeix al pensar que pots perdre't un esdeveniment.", b: "La por a estar massa estona connectat.", c: "L'ansietat que es genera al pensar que et pots perdre en un bosc.", d: "Cap de les anteriors." },
                    correct: 'a',
                },
                {
                    question: "A quin grup d'edat pot afectar més el FoMo?",
                    answer: { a: 'Gent gran', b: 'Adults', c: 'Adolescents', d: 'Cap dels anterios' },
                    correct: 'c',
                }
            ],

            sabies: [
                "Gastem més de 6:30 hores diàriament a internet arreu el món. A Espanya, en particular, la mitja és una mica més baixa, però supera les 5:30 hores.",
                "Els símptomes del FoMo poden arribar a ser: ansietat, inquietud, constant comparació, poca energia i incapacitat per concentrar-se entre altres.",
                "El JoMo (Joy of Missing out) es la satisfacció de perdre't coses. Alguns habits com deixar de fer moltes tasques a la vegada, fer respiracions profundes poden ajudar a augmentar-lo"
            ],

            feel: [
                "Et sents ple d'energia, feliç i amb moltes ganes de fer coses.",
                "Et sents bastant bé i feliç.",
                "Estàs content al final del dia.",
                "Estàs una mica trist.",
                "Estàs bastant trist, notes que necessites mirar el mòbil abans d'anar a dormir.",
                "Estàs molt trist. L'única cosa que et ve de gust per calmar l'ansietat és estar més estona a les xarxes socials, per no perdre't cap notificació."
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

            this.$router.push({
                name: 'intro', params: {
                    index: this.index,
                    fomo: this.fomoReceiver,
                }
            })
        },

    }
}
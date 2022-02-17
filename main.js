const app = new Vue({
    el: "#root",
    data:{
        listaMail: []
    },

    methods:{

        //Funzione che che effettua la chiamata al server con axios, e pusha la singola mail nell'array apposito
        generaMailAPI(){
            for(let i = 1; i <= 10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((risposta) =>{
                        this.listaMail.push(risposta.data.response);
                });
            }

            console.log(this.listaMail);
        }
    },

    //appena vue viene montato, chiamo la funzione per riempire l'array di mail
    mounted(){
        this.generaMailAPI();
    }
});
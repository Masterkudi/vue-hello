const app = Vue.createApp ({
    data() {
        return {
            messaggio: "Questa è il primo messaggio stampato tramite Vue.js all'interno del DOM",
            userName: "AndreaCudini"
        }
    }
})

app.mount('#app')

console.log(app);

const messaggio = "Questa è il primo messaggio stampato tramite Vue.js all'interno del DOM"
//templeate literal
console.log(`<p>${messaggio}</p>`);
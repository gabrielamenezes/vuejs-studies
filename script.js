var app = new Vue({
    //elemento onde ele irá renderizar o vue, é o id app
    el: '#app', 
    data: { //dentro do data é onde iremos declarar nossas variáveis
        message: 'Gabi Teste',
        counter: 0,
        show: false,
        age: 19,

        list: [
            {id: 1, item: 'Ovo'},
            {id: 2, item: 'Farinha'},
            {id: 3, item: 'Leite'},
            {id: 4, item: 'Cenoura'},
            {id: 5, item: 'Fermento'}

        ],

        linguagens: [
            {nome: 'C#'},
            {nome: 'C++'},
            {nome: 'Java'},
            {nome: 'Python'},
            {nome: 'Javascript'},
            {nome: 'Vuejs'},
            {nome: 'Reactjs'},

        ],

        
    },

    methods: {
        increase() {this.counter++},
        decrease() {this.counter--},
        onShowClick() {this.show = !this.show}
    },

    computed: {
        
    }
})
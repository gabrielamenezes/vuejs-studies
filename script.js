var app = new Vue({
    //elemento onde ele irá renderizar o vue, é o id app
    el: '#app', 
    data: { //dentro do data é onde iremos declarar nossas variáveis
        message: 'Gabi Teste',
        counter: 0,
        show: false,
        age: 17,

        list: [
            {name: 'Gabriela', age: '22'},
            {name: 'Helena', age: '1'},
            {name: 'Ana', age: '19'},
            {name: 'Lucas', age: '8'}

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
    created() {
        
        this.changeAge(14);
    },

    computed: {
        isUnderAge() {
            return this.age < 18
        },

        isOld() {
            return this.age > 60;
        },

        adultUsers() {
            return this.list.filter(el => el.age > 18)
        }
    },

    methods: {
        increase() {this.counter++},
        decrease() {this.counter--},
        onShowClick() {this.show = !this.show},


        changeAge(value) {
            
            this.age = value
            if(this.isUnderAge) {
                console.log('é menor de 18')
                return;
            }
            if(this.isOld) {
                console.log('é velho')
                return
            }

            console.log('É idade ok')
    },

    
}})
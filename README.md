## Introdução
Toda instância do vue estará dentro da div com id app

Perceba que não temos mais que interagir diretamente com o HTML. Um app Vue acopla-se a um único elemento da DOM (#app no nosso caso) e então o controla completamente. O HTML é o nosso ponto de entrada, mas todo o resto acontece dentro da recém criada instância do Vue.

## Diretivas
diretivas são prefixadas com **v-** para indicar que são atributos especiais providos pelo vue, e como você deve ter percebido, aplicam comportamento especial de reatividade ao DOM renderizado

* v-bind: O v-bind é usado para ligar dinamicamente um atributo à uma variável declarada
    * shorthand: ':'

```html
<!-- bind an attribute -->
<img v-bind:title="message">
```

```js
var app = new Vue({
    el: '#app', 
    data: { 
        message: 'Gabi Teste'
    }
})
```


resultado:
![alt text](.github/v-bind.png)


* v-for:

* v-if:

## Methods
Os métodos declarados na instância do Vue, serão todos colocados dentro da chave _methods_, como o exemplo abaixo:

```js
var app = new Vue({
    el: '#app', 
    data: {
        message: 'Gabi Teste',
        counter: 0
    },

    methods: {
        increase() {this.counter++},
        decrease() {this.counter--}
    }
})
```

Os métodos não podem ser definidos como arrow functions 
E o this deve ser sempre usado


## Computed
O computed vai ficar vendo se alguma coisa mudou, e ela retorna 
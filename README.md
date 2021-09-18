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

## Created
created é uma função que é chamada assim que a instância do vue é criada. 

## Computed
- Computed é uma maneira fantástica de criar um dado a partir de outros dados. São inúmeras as situações e possibilidades
* obter o total de uma lista.
* uma nova lista com dados filtrados a partir de outra lista.
* Criar uma validação simples com base em outros dados
* obter um valor que está muito "longe" dentro de outro objeto
* combinar, somar ou diminuir valores

Computed é um sistema muito inteligente, ele só executa a função quando solicitado, depois faz um cache do valor, só atualizando caso os dados originais sofram alguma modificação.
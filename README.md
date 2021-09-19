## Introdução
Toda instância do vue estará dentro da div com id app

Perceba que não temos mais que interagir diretamente com o HTML. Um app Vue acopla-se a um único elemento da DOM (#app no nosso caso) e então o controla completamente. O HTML é o nosso ponto de entrada, mas todo o resto acontece dentro da recém criada instância do Vue.

* Reatividade -> Esse conceito consiste em dizer que tudo o que é produzido ou alterado no Vue.js será reativo, como uma reação em cadeia. Assim, por exemplo, quando uma variável do data é alterada, todo os locais que essa variável estiver sendo impressa serão atualizadas instantaneamente

## Diretivas

'São as regras que permitem a realização de uma tarefa'

diretivas são prefixadas com **v-** para indicar que são atributos especiais providos pelo vue, e como você deve ter percebido, aplicam comportamento especial de reatividade ao DOM renderizado

* _v-bind_: O v-bind é usado para ligar dinamicamente um atributo à uma variável declarada. Pode ser utilizado em qualquer atributo da tag html
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


* _v-model_
    - quando temos qualquer input ou um campo que recebe um dado, o v-model vai ser o valor daquele dado

    ```html
    <!--o v-model especifica para qual variável esse valor que virá do input está indo-->
    <input type="text" v-model="name">
    ```

    ```js
    var app = new Vue({
        data: {
            name: ''; //o nome digitado no input será atribuido aqui
        }
    })
    ```

* _v-show_
    - Vai mostrar algo na tela se a condicional passada for verdadeira
    - usar quando você quer mostrar ou esconder elementos na tela
    - se condição for falsa, o elemento continua na árvore do html, mas com display none

    ```html
        <h1 v-show="status">{{ titulo }}</h1>
    ```

    ```js
        var app = newVue({
            el: '#app',
            data: {
                status: true, //status = true, ou seja o título será mostrado na tela
                titulo: 'Aprendendo vuejs'
            }
        })
    ```

* v-if
    - Vai mostrar algo na tela se a condicional passada for verdadeira
    - se condição for falsa, o elemento não será renderizado ao html


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

## created
created é uma função que é chamada assim que a instância do vue é criada. 

## computed
- Computed é uma maneira fantástica de criar um dado a partir de outros dados. São inúmeras as situações e possibilidades
* obter o total de uma lista.
* uma nova lista com dados filtrados a partir de outra lista.
* Criar uma validação simples com base em outros dados
* obter um valor que está muito "longe" dentro de outro objeto
* combinar, somar ou diminuir valores

Computed é um sistema muito inteligente, ele só executa a função quando solicitado, depois faz um cache do valor, só atualizando caso os dados originais sofram alguma modificação.



## watch
- observa quando uma variável muda
- Parâmetros: valorNovo, valorAntigo


## Componentizando
A ideia de componentizar é criar vários pedaços de códigos que possam ser reutilizados ao longo da aplicação
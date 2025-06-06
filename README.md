## Gerador de Tabuada


Projeto realizado com o intuito de praticar e aprimorar técnicas de HTML, CSS e JavaScript, envolvendo manipulação de dados recebidos por input com JavaScript,prática de estilização CSS envolvendo Flexbox, responsividade e bom contraste de cores e estruturação de código HTML limpo e bem organizado.

O Gerador funciona de maneira simples : o usuário deve colocar o número a ser multiplicado("input informe o número:"), até quando ele será multiplicado("input multiplicar até:") e clicar em gerar, gerando assim a tabuada. É possível utilizar números tanto positivos quanto negativos.

## Principais desafios:

- Trazer responsividade de layout para diferentes tipos de tela
- Gerar tabuadas mesmo quando os valores informados pelo usuário são negativos 
- Trabalhar com a junção do HTML e JavaScript.


## Reponsividade:

Para a responsividade,optei por trabalhar com flexbox,o que facilitou bastante o processo pois precisei apenas ajustar tamanhos.

## Tabuada funcional a números negativos:

Lógica inicial:

for(i=1; i<=multiplier; i++){ const result = number * i; const line = document.createElement("p"); line.textContent = ${number} x ${i} = ${result}; table.appendChild(line); }

Alterei para :

if(multiplier>=0){ table.innerHTML = ""; title.innerText = Tabuada do ${number} até ${multiplier}; for(i=1; i<=multiplier; i++){ const result = number * i; const line = document.createElement("p"); line.textContent = ${number} x ${i} = ${result}; table.appendChild(line); } }else{ table.innerHTML = ""; title.innerText = Tabuada do ${number} até ${multiplier}; for(i=1; i>=multiplier; i--){ const result = number * i; const line = document.createElement("p"); line.textContent = ${number} x ${i} = ${result}; table.appendChild(line); } } }

Para resolver o problema, utilizei uma condicional if que separa os casos para multiplicador final maior que zero e menor que zero. Mesmo sendo meu primeiro contato com JavaScript, minha base em Java me ajudou bastante a entender a lógica e propor esta solução, pois já trabalhei com situações parecidas na linguagem.

## Integração HTML e JavaScript:

Sobre a junção de HTML com JavaScript,precisei recorrer a ferramenta ChatGPT para produzir algumas partes do código,pois não sabia esconder e mostrar elementos na tela baseado em condições utilizando as duas ferramentas em conjunto. Isso me possibilitou aprender conceitos que eu não tinha claros na minha mente,e por em prática o JavaScript, que estou estudando e buscando aprimorar esses pontos que eu ainda não tenho 100% claros, a fim de consolidar a base e fundamentos.

Extra : O site pode ser utilizado para auxiliar jovens e principalmente crianças na aprendizagem de matemática básica,com multiplicação envolvendo números negativos e positivos, tudo isso de forma rápida e da forma que quiser.

## Demonstração do Projeto: 
![Demonstração](./assets/GeradorDeTabuada.gif)

## Acesse o projeto online:

[Clique aqui para acessar o Gerador de Tabuada](https://gerador-de-tabuada-nu.vercel.app/)


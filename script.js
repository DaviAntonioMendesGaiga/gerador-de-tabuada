// Passando o conteúdo html para JavaScript
const form = document.querySelector("#forms");
const numberInput = document.querySelector("#number");
const multiplierInput = document.querySelector("#multiplier");
const table = document.querySelector(".results");
const title = document.querySelector(".results-container h2")

// Função geradora da tabuada
const gerador = (number,multiplier) => {
    const resultsContainer = document.querySelector(".results-container");
    resultsContainer.style.display = "flex";

    // If que permite a tabuada ser funcional tanto para multiplicadores positivos quanto negativos
    if(multiplier>=0){
        table.innerHTML = "";
        title.innerText = `Tabuada do ${number} até ${multiplier}`; 
        for(i=1; i<=multiplier; i++){
            const result = number * i;
            const line = document.createElement("p");
            line.textContent = `${number} x ${i} = ${result}`;
            table.appendChild(line);
        }
    }else{
        table.innerHTML = "";
        title.innerText = `Tabuada do ${number} até ${multiplier}`;
        for(i=1; i>=multiplier; i--){
            const result = number * i;
            const line = document.createElement("p");
            line.textContent = `${number} x ${i} = ${result}`;
            table.appendChild(line);
        } 
    }
}

// Validando os valores informados pelo usuário e transferindo para o gerador da tabuada
form.addEventListener("submit",(event)=>{

    event.preventDefault();

    const number = numberInput.value;
    const multiplier = multiplierInput.value;

    

    if(!number || !multiplier){
        return;
    }

   
    gerador(number,multiplier);
})




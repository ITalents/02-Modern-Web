async function getAdvice(){
    const resposta  = await fetch("https://api.adviceslip.com/advice");
    //criou uma variável está guardando os dados que vem da API
    //console.log(resposta);
    //para ver toda estrutura dos dados
    const data = await resposta.json();
    //transformou em JSON a reposta que veio do fetch da API
    //console.log(data);
    //console.log(data.slip.advice);
    
    document.querySelector("#advice").innerHTML = data.slip.advice;
    //data.slip.advice é o caminho para acessar o valor do objeto
}
getAdvice();








//botão funcionando
// let botaoAdvice = document.querySelector("#get-advice");

// botaoAdvice.addEventListener("click", function(){
//     getAdvice();
// });


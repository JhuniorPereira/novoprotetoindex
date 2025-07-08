 let botão = document.querySelector("#botão")
     botão.style.background="yellow";
     botão.style.color="green";
 let estaclicado=false;
     botão.addEventListener("mouseover",e =>{
         if(!estaclicado)
     botão.style.background="green";
     botão.style.color="yellow";
 });

     botão.addEventListener("mouseout",e =>{
         if(!estaclicado)
     botão.style.background="yellow";
     botão.style.color="green";
 });

     botão.addEventListener("click",e =>{
     botão.style.background="pink";
     botão.style.color="blue";
     botão.innerHTML="Seja muito bem vindo a minha página";
     estaclicado=true;
 });

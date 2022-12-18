
//document.getElementById("elegirBandera").onchange = function (){miFuncion()};

function miFuncion(){

    let uno = document.getElementById("elegirBandera").value;
    let guate = document.getElementById("ejercicio1");
    let niger = document.getElementById("ejercicio2");
    let francia = document.getElementById("ejercicio3");
    let suecia =  document.getElementById("ejercicio4");
    let suiza = document.getElementById("ejercicio5");
    let prueba = document.getElementById("hoho")
   /* if(uno == 1){
        guate.style.display = "block";
    } else if(uno == 2){
        niger.style.display = "block";
    } else if(uno == 3){ 
        francia.style.display = "block";
    } else if (uno == 4){
        suecia.style.display = "block";
    } else{ suiza.style.display = "block";
};*/

switch(uno){
    case "1":
        uno == 1    
        guate.style.display = "block";
        break;
    case "2":
        uno == 2
        niger.style.display = "block";
        break;
    case "3":
        uno == 3
        francia.style.display = "block";
        break;
    case "4":
        uno == 4
        suecia.style.display = "block";
        break;
    default: suiza.style.display = "block";
};

/*
switch(uno){
    case "1":
        uno != 1    
        guate.style.display = "none";
        break;
    case "2":
        uno != 2
        niger.style.display = "none";
        break;
    case "3":
        uno != 3
        francia.style.display = "none";
        break;
    case "4":
        uno != 4
        suecia.style.display = "none";
        break;
    default: suiza.style.display = "none";
};*/




if(uno != 1){
        guate.style.display = "none";
    } else{ prueba.style.display = "none" };

if (uno != 2){
    niger.style.display = "none";
} else{prueba.style.display = "none"};

if (uno != 3){
    francia.style.display = "none";
} else{prueba.style.display = "none"};

if (uno != 4){
    suecia.style.display = "none";
} else{prueba.style.display = "none"};

if (uno != 5){
    suiza.style.display = "none";
} else {prueba.style.display = "none"}

  /*  if( uno == (2), (3), (4), (5)){
        guate.style.display = "none";
    } else if(uno == (1), (3), (4), (5)){
        niger.style.display = "none";
    } else if(uno == (1), (2), (4), (5)){ 
        francia.style.display = "none";
    } else if (uno == (1), (2), (3), (5)){
        suecia.style.display = "none";
    } else{ suiza.style.display = "none";
};*//*
   if( uno == 4){
        suiza.style.display = "none";
    } else if(uno == 3){
        suecia.style.display = "none";
    } else if(uno == 2){ 
        francia.style.display = "none";
    } else if (uno == 1){
        niger.style.display = "none";
    } else{ guate.style.display = "none";
};*/

    console.log(uno);
    console.log(guate);
    console.log(francia);
    console.log(niger);
    console.log(suecia);
    console.log(suiza);
    
}

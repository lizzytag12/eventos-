//    1)Crear un botón que al hacerle click, muestre un saludo por alert.
/* function saludo() {
    alert("Olá seja bem-vindo! ");
} */

//   2)Crear un botón que al hacerle click, muestre un mensaje en el HTML.

/* 
function mensaje (){
    document.write("<p>  'El hombre se descubre a sí mismo cuando se enfrenta a los obstáculos'</p>")
} */


//   3)Crear un botón que al hacerle click cambie de color
/* 
 function cambio_color() {
    document.getElementById("boton").style.backgroundColor= "pink";
  } */
/* document.write(`<button id="cambiocolor" class="rojo" onclick="cambiarColor()">Click para cambiar color!</button>`); 
  

let cambiarColor=()=>document.querySelector("#cambiocolor").classList.toggle("rojo");
 console.log(cambiarColor());  */

//   4)Crear 5 botones numerados del 1 al 5. Al hacer click en uno y mostrar un mensaje que diga //
    //“Haz clickeado el botón $número”, indicando al usuario cuál botón apretó.
   
   
    /* const botones= document.querySelectorAll(".botones");

   const cuandoSehaceClick=function(parametroporvalor){
     alert(`haz clickeado el boton:${parametroporvalor} `);
   }

   botones.forEach(boton=>{
     boton.addEventListener("click", function(){
      cuandoSehaceClick(this,value);
     })
   });

   */
    //  5)Crear un input y un botón. Dentro del input el usuario debe ingresar un color y
    //al hacre click, el input se pone de ese color y 
    //se genera un mensaje indicando el color elegido.
    
    /* 
    function Color(){
        if ($(ele).val() === "") {
          $(ele).css("background-color", "");
        }
        else{
          $(ele).css("background-color", "pink");
        }
      } */

    //  6)Crear dos input tipo número y un botón. 
//a) Al hacer foco en un input se debe poner azul.
//b) Al escribir, se debe poner violeta.
//c) Cuando se le saca el foco, se pone verde.
//d) Al hacer click en el boton genera un nuevo párrafo en el html que muestra la suma de ambos

/* const boton = document.querySelector("#numero");
const cambioColor = ()=>{document.getElementById("numero").style.backgroundColor= "blue";

}
boton.addEventListener("focus",cambioColor) */
/* const boton = document.querySelector("#numero");
const cambioColor = ()=>{
  
  document.getElementById("numero").style.backgroundColor= "purple";

}
boton.addEventListener("input",cambioColor)  */
/* const boton = document.querySelector("#numero");
const cambioColor = ()=>{
  
  document.getElementById("numero").style.backgroundColor= "green";

}
boton.addEventListener("blur",cambioColor)  
 */
/* const a = document.querySelector("#numero1");
const b = document.querySelector("#numero2");
const nuevop= ()=>{
  
  document.write(parseInt(a.value)+parseInt(b.value));
  
  

}
boton.addEventListener("click",nuevop)
 */
/* const a = document.querySelector("#numero1");
const b = document.querySelector("#numero2");
const nuevop= ()=>{
  
 let p= document.createElement("p");
 p = document.write(parseInt(a.value)+parseInt(b.value));
 console.log(p)
  
}
boton.addEventListener("click",nuevop) */


//  7)Poner en un select tres (o más) opciones de superheroes. 
//Dependiendo el que el usuario elija, se mostrará debajo una imagen que haga referencia al personaje. 
//Cuando se le pase el mouse por encima, 
//la imagen debe mostrar una foto de su identidad secreta en su lugar. (Por ejemplo en lugar de verse superman, se vera a Clark Kent).

/* 
const boton = document.querySelector('#boton')



  const heroina = () => {
    const select =document.getElementById('select').value;
    
   
    if(select == "superWoman")  document.querySelector("img").src="imag.heroinas/superwoman.jpg"
    
    if(select=="batichica")  document.querySelector("img").src="imag.heroinas/batichica.jpg";
   
    if(select=="blackwidow") document.querySelector("img").src= "imag.heroinas/backwidow.jpg";
     
     
  }



   boton.addEventListener("click",heroina); 

   const foto = document.querySelector("#picture");

   const idsecreta=()=>{
     const select =document.getElementById('select').value;

     document.querySelector("#picture").src=`imag.heroinas/${select}2.jpg`

   }

   foto.addEventListener("mouseover",idsecreta)
 */

/*  const cargarEdad = () => {
 
  let edadMundo = document.getElementById("select").value;

 console.log(edadMundo);
} */



//Investigar y elegir un evento que no hayamos visto en clase. 
//Hacer una demo de cómo funciona





//clase con el mentor Ema:

/* let computadora=["pantalla","teclado","mouse","cpu"];


let persona={

edad:20,
nombre:"emanuel",
gustos:"rusas",
profesion:"programador",
alcoholico:true

}

let calculadora={

 

} */


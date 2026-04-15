function envioFormulario(){
    console.log("envio Foemulario2")
    let nombre=document.querySelector("#fname").value;
    let titulo=document.querySelector("h1");
    let titulo2=document.querySelector("title");
    titulo.innerHTML=nombre;
}
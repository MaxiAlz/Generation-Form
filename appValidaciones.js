//modificar elementos en el dom

//selecciono el div dinde va air el warning de nombre
const warningName=document.getElementById(`fullNameWarnig`);
//crear el contenido que va a tener el warning
const warningNameContent=document.createElement(`p`);
//agrego contenido a la constante que warningNameContent
warningNameContent.innerHTML=`*Failed Name*`;
//agregarle una clase (para boostrap) del elemento que cree
warningName.classList.add(`colorWarning`);
warningName.classList.add(`form-text`);
warningName.classList.add(`mb-1`);

//agregar todo lo que cree a la variable warningName
warningName.appendChild(warningNameContent);

if(isNaN()){

}
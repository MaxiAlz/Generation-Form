/*Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, 
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:

mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación 
pertenece la persona creada y cual es el rasgo característico de esta generación.

Para realizar este método tener en cuenta la siguiente tabla de generaciones:

 */


//1 crear una clase persona. Propiedades: nombre,edad
//    ,dni,sexo(un array con H o M??),peso,altura año nacimiento
let personasCreadas=[];
let nuevaPersona;
class Persona{
    constructor(name,age,id,sex,weight,hight,birth){
        this.name=name;
        this.age=age;
        this.id=id;
        this.sex=sex;
        // this.weight=weight;
        // this.hight=hight;
        // this.birth=birth;
    }
 //metodo mostrar generacion:
 showGeneration(){
     
     let nacimiento= 2022-this.age;
     if(nacimiento>2010){
        alert("New Generation")
     }else  if(nacimiento>1994 && nacimiento<2010){
        alert("Generation Z");
     }else if((2022-this.age)>1981 && (2022-this.age)<1993){
        alert("generation Y");
     }else if((2022-this.age)>1969 && (2022-this.age)<1980){
        alert("Generation X");
     }
    
    }
//metodo si es mayor de edad
    isOld(){
     if(this.age>18){
         console.log(this.age);
            if(this.sex=="Men"){
                alert("He is Adult")
            }else alert("She is Adult")
     }else {
         if(this.sex=="Men"){
             alert("He is young")
         }else alert("She is young")

     }
        
    }
}
 
//seleccionar el boton y que este atento a que clickea
//esto le saca la propiedad submit al boton
const botonSentInfo=document.getElementById("botonSend");
botonSentInfo.addEventListener(`click`,(event)=>{event.preventDefault()})

const botonShowGenation=document.getElementById(`ShowGenerationButton`);
const botonIsOld=document.getElementById(`isOldButton`);

botonShowGenation.addEventListener(`click`,event=>{event.preventDefault()})
botonIsOld.addEventListener(`click`,event=>{event.preventDefault()})


const crearPersonaFuncion=()=>{
    let nombre=document.getElementById("name").value;
    let age=document.getElementById("age").value,
    id=document.getElementById("id").value,
    sex=document.getElementById("Gender").value;
    //aca irian las validaciones
    // if(failedName(nombre)){
    //     document.getElementById(`name`).className=`colorWarning`;
    // }else if(failedAge(age)){
    //     document.getElementById(`ageWarning`).className=`colorWarning`;
    // }else if(failedID(id)){
    //     document.getElementById(`idWArning`).className=`colorWarning`;
    // }else if(failedGender(sex)){
    //     document.getElementById(`GenderWarning`).className=`colorWarning`;
        
    // }else{
    //     cleanFaileds()
    //     let nuevaPersona = new Persona(nombre,age,id,sex);
    //     document.getElementById(`formulario`).reset();
    //     console.log(nuevaPersona);  
    // }
    if (validateall()) {
        return
    }else {
            cleanFaileds()
            // personasCreadas.push(new Persona(nombre,age,id,sex))
            nuevaPersona = new Persona(nombre,age,id,sex);
            document.getElementById(`formulario`).reset();
            console.log(nuevaPersona);  
            // console.log(personasCreadas);
            return nuevaPersona;
        }
    
    
    //crear persona
}


// console.log(nuevaPersona)
//valido verifico si alguna de las validaciones devuelve un true(dato mal ingresado)
const validateall=()=>{
    let nombre=document.getElementById("name").value;
    let age=document.getElementById("age").value,
    id=document.getElementById("id").value,
    sex=document.getElementById("Gender").value;
    let failName= failedName(nombre)
    let failAge= failedAge(age)
    let failGender= failedGender(sex)
    let failid= failedID(id)
    
    if (failName||failAge||failGender||failid) {
        return true
    } else {
        return false
    }
}
//funciones para validar nombre
const failedName=(string)=>{
    if(!isNaN(string)){
        //aca selecciono el elemento que quiero que aparezca y reemplazo la clase que lo esconde por una
        //de letras color rojo
        /*agregarle o quitarle la clase */
        
        document.getElementById("fullNameWarnig").className=`colorWarning`
        return true 
    }else {
        document.getElementById("fullNameWarnig").className=`d-none`
        return false}
}

const failedAge=(edad)=>{
    if(edad<0 || edad>90){
        document.getElementById(`ageWarning`).className=`colorWarning`
        return true
    }else {
        document.getElementById("ageWarning").className=`d-none`
        return false
    }
}

const failedID=(id)=>{
    if(id<1000){
        document.getElementById(`idWArning`).className=`colorWarnig`
        return true
    }else {
        document.getElementById(`idWArning`).className=`d-none`
        return false
    }
}

const failedGender=(Gender)=>{
    if(Gender=="vacio"){
        document.getElementById(`GenderWarning`).className=`colorWarning`
        return true
    }else {
        document.getElementById(`GenderWarning`).className=`d-none`
        return false
    }
}
//limpia los errores una vez que se envia el formulario
const cleanFaileds=()=>{
    document.getElementById("fullNameWarnig").className=`d-none`
    document.getElementById(`ageWarning`).className=`d-none`;
    document.getElementById(`idWArning`).className=`d-none`
    document.getElementById(`GenderWarning`).className=`d-none`
}


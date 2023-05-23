function sayHello(){
    let name = document.getElementById('name')
    console.log(nombre)

     
}   

function getDataForm(){

    let name = document.getElementById('name')
    console.log(name.value)
    let Email = document.getElementById('Email')
    console.log(Email.value)
    let birth = document.getElementById('nace')
    console.log(birth.value)
    let sex = document.getElementById('so')
    console.log(sex.value)

    if(name.value == ''){
        alert('el campo nombre es obligatorio')
        name.setAttribute('style', 'border-color:red')
        name.setAttribute('placeholder', 'Escriba el nombre aqui')
        return
    } 

    if(Email.value == ''){
        alert('el Email es obligatorio')
        Email.setAttribute('style', 'border-color:red')
        Email.setAttribute('placeholder', 'Email requerido')
        return
    } 

    if(birth.value == ''){
        alert('su fecha de nacimiento es obligatorio')
        birth.setAttribute('style', 'border-color:red')
        birth.setAttribute('placeholder', 'Escriba su fecha de nacimiento')
        return
    } 

    if(sex.value == ''){
        alert('su genero es obligatorio')
        sex.setAttribute('style', 'border-color:red')
        sex.setAttribute('placeholder', 'Seleccione su genero')
        return
    } 

    const datosFormulario = {
        name: name.value,
        nace: nace.value,
        Email: Email.value,
        sex: sex.value
    }
    console.log(datosFormulario)
}
    
function validateState(id){
    const name = document.getElementById(id)
    if(name.value == ''){
        name.setAttribute('Style', 'border-color:red')
    } else {
        name.setAttribute('Style', 'border-color:black')
    }
}
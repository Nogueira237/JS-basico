var horanow =  new Date()
var hora = horanow.getHours()
var p1 = "manhã"
var p2 = "tarde"
var p3 = "noite"
if(hora <12 && hora>=4){
    console.log(`São ${hora} horas da ${p1}.`)
    console.log("Bom dia!")
}else if(hora>=12 && hora<18){
    console.log(`São ${hora} horas da ${p2}.`)
    console.log("Boa tarde!")
}else if(hora >= 18 && hora<24 || hora<4){
    console.log(`São ${hora} horas da ${p3}.`)
    console.log("Boa noite!")
}else if(hora>24){
    console.log("Esse horário não existe")
}
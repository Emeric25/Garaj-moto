// let numar = 2
// function verificaNumar(numar){
//     if(verificaNumar === 2){
//         console.log("este par")
//     }
//     else {console.log("esti prost")}
// }
// console.log(verificaNumar)

// let esteStudent = 20


// if (esteStudent === 20){
//     console.log("esti gay")
// }
// else {
//     console.log("esti tare")
// }

// function numarPar (numar, estePar){
//     if (estePar){
//         return numar / 2
//     }
//     else {return ("esti gay")}
// }
// console.log(numarPar(5,false))

// function numarPar (numar , par){
//     if (par = true){
//         numar = ("este par");
//         return numar
//     }
//     else{return ("nu este par")}
// }
// console.log(numarPar(4,false))


// function verificaNumar(numar) {
//     if (numar % 2 === 0) {
//         return "Numarul este par";
//     } else {
//         return "Numarul este impar";
//     }
// }

// console.log(verificaNumar(4));
// console.log(verificaNumar(7));


// console.log(22 % 2)


// for (let numar = 1 ; numar <= 10; i++){
//     function verificaNumar(numar) {
//         if (numar % 2 === 0) {
//             return "Numarul este par";
//         } else {
//             return "Numarul este impar";
//         }
// }
// }
// // console.log(verificaNumar(4));
// // console.log(verificaNumar(7));
// console.log(verificaNumar)



// function verificaNumar(numar) {
//     if (numar % 2 === 0) {
//         return "Este par";
//     } else {
//         return "Este impar";
//     }
// }

// for (let numar = 1; numar <= 10; numar++) {
//     console.log (verificaNumar(numar))
//     // Ce trebuie să scriem aici?
// }

// function verificaNumar (numar){
//     if(numar % 3 ===0){
//         return "Numarul : " + numar + " este divizibil cu 3 "
//     }
//     else{ 
//         return "Numarul : " + numar + " nu este divizibil cu 3"
//     }
// }



// for (let numar = 1; numar <= 20; numar++) {
//     console.log (verificaNumar(numar))
//     // Ce trebuie să scriem aici?
// }

function numarPar (numar){
    if(numar % 3 ===0 && numar % 5 === 0){
        return "FizzBuzz"
    }
    if(numar % 3 === 0){
        return "Fizz"
    }
    if(numar % 5 === 0){
        return "Buzz"
    }
    else {return "Numarul : " + numar + " nu este divizibil nici cu 3 nici cu 5"}
        
}


for ( let numar = 1; numar <= 30; numar++){
    console.log(numarPar(numar))
}

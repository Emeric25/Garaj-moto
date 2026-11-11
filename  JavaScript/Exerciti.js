// Incercare printare nr pare
// function numarPar (numar , par){
//     if (par = true){
//         numar = ("este par");
//         return numar
//     }
//     else{return ("nu este par")}
// }
// console.log(numarPar(4,false))

// Aceasi incercare luata diferit
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

// Arata ce numar este par si impar

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

// Aici am reusit sa fac un for care sa dea 10 numere ,iar functia zice care este par sau impar

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

// Acelasi conspect doar ca arata daca numere din for se impart la 3

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

// Aici am facut un exercitiu in care sa ne scrie anumite cuvinte daca ne da 5 sau 3 si separat 3 si 5 , 
// doar ca nu este corect pentru ca am folosit mai mult if si astfel trece prin fiecare conditie XXX

// function numarPar (numar){
//     if(numar % 3 ===0 && numar % 5 === 0){
//         return "FizzBuzz"
//     }
//     if(numar % 3 === 0){
//         return "Fizz"
//     }
//     if(numar % 5 === 0){
//         return "Buzz"
//     }
//     else {return "Numarul : " + numar + " nu este divizibil nici cu 3 nici cu 5"}
        
// }


// for ( let numar = 1; numar <= 30; numar++){
//     console.log(numarPar(numar))
// }



// Aici este un exercitiu care ne face niste preturi ,iar apoi le reduce dupa numarul sau 

// function calculeazaReducere(pret){
//     if (pret >= 100){
//         return pret -(pret * 0.20) 
//     }
//     else if(pret < 100){
//         return pret - (pret * 0.10)
//     }
// }
// for (let pret = 50; pret <=200; pret += 50)
//     // console.log(pret)
//     console.log (calculeazaReducere(pret))

// Aici incerc un exercitiu in care sa arata un anumit text la diferite note si sa folosesc corect if ,else if si else

// let nota = 4 ;5; 8; 9; 10

function verificaNota (nota){
    if(nota === 10 )
        console.log ("Excelent")
    else if (nota === 9)
        console.log ("Foarte bine")
    else if (nota === 7 && 8)
        console.log ("Bine")
    else if (nota === 5 && 5)
        console.log ("Satisfacator")
    else {console.log ("Insuficient")}      
}
for (let nota = 1; nota <= 10; nota ++)
console.log(verificaNota(nota))

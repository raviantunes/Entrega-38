function oneThroughTwenty() {
  let umavinte = []
  for (let i = 1; i<=20; i++){
  umavinte.push(i)
  }
  return umavinte
}
console.log(oneThroughTwenty())


function evensToTwenty() {
    let paresavinte = []
    for (let i = 1; i<=20; i++){
    if(i%2===0){
    paresavinte.push(i)}
    }
    return paresavinte
}
  console.log(evensToTwenty())



function oddsToTwenty() {
    
  let imparesavinte = []
  for (let i = 1; i<=20; i++){
    if(i%2!=0){
    imparesavinte.push(i)
    }
  }
  return imparesavinte
}
  console.log(oddsToTwenty())



function multiplesOfFive() {
    
  let multiplosdecinco = []
  for (let i = 1; i<=100; i++){
    if(i%5===0){
      multiplosdecinco.push(i)
    }
  }
  return multiplosdecinco
}
console.log(multiplesOfFive())


function squareNumbers() {
  let quadradosPerfeitos = [];
  let resultado = 1;

  for (let i = 1; i <=100; i++){
      resultado = i*i
    
      if (resultado<=100){
         quadradosPerfeitos.push(resultado);
      }
    }
    return quadradosPerfeitos
}
console.log(squareNumbers())


function countingBackwards() {
  let vinteaum = []
  for (let i = 20; i>=1; i--){
    vinteaum.push(i)
    }
  return vinteaum
}
console.log(countingBackwards())


function evenNumbersBackwards() {
  let paresContrario = []
  for (let i = 20; i>=1; i--){
    if(i%2===0){
    paresContrario.push(i)}
  }
    return paresContrario
}
console.log(evenNumbersBackwards())


function oddNumbersBackwards() {
  let imparesContrario = []
  for (let i = 20; i>=1; i--){
    if(i%2!=0){
    imparesContrario.push(i)
    }
  }
  return imparesContrario
}
console.log(oddNumbersBackwards())


function multiplesOfFiveBackwards() {
  let multiplosdecincoContrario = []
  for (let i = 100; i>=1; i--){
    if(i%5===0){
      multiplosdecincoContrario.push(i)
    }
  }
  return multiplosdecincoContrario
}
console.log(multiplesOfFiveBackwards())


function squareNumbersBackwards() {
  let quadradosPerfeitosContrario = [];
  let resultado = 1;

  for (let i = 100; i >=1; i--){
      resultado = i*i
    
      if (resultado<=100){
         quadradosPerfeitosContrario.push(resultado);
      }
    }
    return quadradosPerfeitosContrario
}

console.log(squareNumbersBackwards())

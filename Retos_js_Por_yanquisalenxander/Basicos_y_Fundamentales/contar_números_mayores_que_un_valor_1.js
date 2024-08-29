function contarMayoresQue (numeros, x) {
   let mayores=0
   for(let i=0; i<numeros.length; i++){
      if(numeros[i]>x){
         mayores=mayores+1
      }
   }
   console.log(mayores)
}
function numeroMayorYMenor(numbers) {
   let mayor=0
   let menor=9999
   for(i=0; i<numbers.length; i++){
      if(numbers[i]>mayor){
         mayor=numbers[i]
      }
      if(numbers[i]<menor){
         menor=numbers[i]
      }
   }
   console.log(menor)
   console.log(mayor)
}
function reverseArray(arr) {
   const arrInvertido=[]
   for(let i=0; i<arr.length; i++){
      arrInvertido.unshift(arr[i])
   }
   return arrInvertido
}
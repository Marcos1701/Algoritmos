import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const N = Number(input('Digite o valor de N: '))
     
    encontrar_S(N)

}

function encontrar_S(valor){

  let S = 0
  let contador = 1
   
  while(contador <= valor){
      S += 1 / contador
      contador++
  }

  console.log(`O valor de S é ${S.toFixed(3)}`)

}


main()
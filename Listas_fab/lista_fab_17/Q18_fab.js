import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const N = Number(input('Digite o valor de N: '))
     
    encontrar_S(N)

}

function encontrar_S(valor){

    let contador = 2
    let divisor = valor - 1
    let S = 1 / valor
   
  while(divisor > 0){
      S += contador / divisor
      contador++
      divisor--
  }

  console.log(`O valor de S é ${S.toFixed(3)}`)


}


main()
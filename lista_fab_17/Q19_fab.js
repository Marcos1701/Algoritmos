import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const N = Number(input('Digite o valor de N: '))
     
    encontrar_S(N)

}

function encontrar_S(valor){

    let valor_A = 2
    let valor_B = valor - 1
    let S = 1 / valor
   
  while(valor_B > 0){
      if(valor_A % 2 !== 0){
          S += valor_A / valor_B
      }else{
          S -= valor_B / valor_A
      }
      valor_A++
      valor_B--
  }

  console.log(`O valor de S é ${S.toFixed(2)}`)

}


main()
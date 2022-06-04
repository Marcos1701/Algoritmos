import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const N = 99
     
    encontrar_S(N)

}

function encontrar_S(valor){

    let valor_A = 1
    let valor_B = 1
    let S = 0
   
  while(valor_A <= valor){
      S += valor_B / valor_A
      valor_A += 2
      valor_B++
  }

  console.log(`O valor de S é ${S.toFixed(2)}`)


}


main()
import prompt from 'prompt-sync';
const input = prompt()


function main(){

    const N = Number(input('N: '))

    pegar_sequencia(N)

}

function pegar_sequencia(N){

  let num_elemento = 0
  let num_p_soma = 1

  while(num_p_soma <= N){
      num_elemento += num_p_soma
      console.log(`${num_elemento}`)
      num_p_soma++
  }
  console

}

main()
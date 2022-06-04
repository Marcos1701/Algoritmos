import prompt from 'prompt-sync';
const input = prompt()


function main(){


    const valor_final = Number(input('Digite o valor: '))

    pegar_sequencia(valor_final)
}


function pegar_sequencia(valor){

  let valores_menores_a_serem_exibidos = 1

  while(valores_menores_a_serem_exibidos <= valor){
     console.log(valores_menores_a_serem_exibidos)
     valores_menores_a_serem_exibidos++
  }

}
main()
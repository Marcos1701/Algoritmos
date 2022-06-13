import fs from 'fs'
const input = fs.readFileSync('stdin', 'utf-8')
const entradas = input.split('\n')


function main(){


    const qtd = Number(entradas[0])

    organizar_e_pegar_os_indices_na_sequencia(qtd)

}


function organizar_e_pegar_os_indices_na_sequencia(qtd){

  for(let i = 1; i <= qtd;i++){

    pegar_elemento_em_determinado_indice(entradas[i])

  }
}


function pegar_elemento_em_determinado_indice(indice){

    let valor_a = 0
    let valor_b = 1
    let valor_na_sequencia = valor_a

    for(let i = 0; i < indice; i++){
    
        valor_a = valor_b
        valor_b = valor_na_sequencia

        valor_na_sequencia = valor_a + valor_b
    }

    console.log(`Fib(${indice}) = ${valor_na_sequencia}`)
}


main()
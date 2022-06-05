import prompt from 'prompt-sync'
const input = prompt()


function main(){

 const inicio_PA = Number(input('Digite o primeiro valor da PA: '))
 const limite = Number(input('Digite o número de elementos da PA que deseja: '))
 const razao = Number(input('Digite a razão da PA: '))

 pegar_sequencia_pa(inicio_PA,razao,limite)

}

function pegar_sequencia_pa(inicio,razao,limite){
    let elemento_pa = inicio

    for(let i = 0; i < limite; i++){
        console.log(elemento_pa)
        elemento_pa += razao
    }
}

main()
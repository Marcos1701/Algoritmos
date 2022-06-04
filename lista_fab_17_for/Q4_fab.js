import prompt from 'prompt-sync'
const input = prompt()


function main(){

 const inicio_PA = Number(input('Digite o primeiro valor da PG: '))
 const limite = Number(input('Digite o número de elementos da PG que deseja: '))
 const razao = Number(input('Digite a razão da PG: '))

 pegar_sequencia_pg(inicio_PA,razao,limite)

}

function pegar_sequencia_pg(inicio,razao,limite){
    let elemento_pg = inicio

    for(let i = 1; i <= limite; i++){
        console.log(`${i}° - ${elemento_pg}`)
        elemento_pg *= razao
    }
}

main()
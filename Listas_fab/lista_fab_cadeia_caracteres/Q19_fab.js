import prompt from 'prompt-sync'
const input = prompt()


function main(){

    const binario = input('Digite o binário: ')

    const decimal = pegar_decimal(binario)

    console.log(`O número em binário digitado corresponde ao ${decimal} em decimal`)
}

function pegar_decimal(binario){
    
  let decimal = 0
  let contador = 0

   for(let i = (binario.length - 1);i >= 0;i--){
       decimal += (2**i) * binario[contador]
       contador++
   }
   return decimal
}

main()
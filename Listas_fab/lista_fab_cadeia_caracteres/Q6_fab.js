import prompt from 'prompt-sync'
const input = prompt()


function main(){
    
    console.log('Digite a frase (retorna os números, de 0 a 100, inseridos por extenso): ')
    const frase = input('=> ')

    const nova_frase = colocar_algarismos_por_extenso(frase)

    console.log(nova_frase)
}

function colocar_algarismos_por_extenso(frase){

 let frase_fragmentada = frase.split(' ')
 let nova_frase = ''

  for(let caractere of frase_fragmentada){
      if(eh_numero(caractere)){
       nova_frase += pegar_correspondente(caractere)
      }else{
        nova_frase += `${caractere} `
      }
  }
  return nova_frase
}

function eh_numero(caractere){
  const possivel_num = Number(caractere)
     return !isNaN(possivel_num)
}


function pegar_correspondente(num){

    const numero = Number(num)
    

const numeros_ate_20 = ['zero',"um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"]
const dezenas = ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]

    if(numero < 20){
        return `${numeros_ate_20[numero]} `
    }else if(numero <= 99){
        const num_frag = numero.toString().split('')
        const dezena = Number(num_frag[0])
        const unidade = Number(num_frag[1])
       
        if(num_frag[1] == 0){
            return dezenas[dezena - 1]
        }else{
            return `${dezenas [dezena - 1]} e ${numeros_ate_20[unidade]} `
        }

    }else{
        return 'cem'
    }
}


main()
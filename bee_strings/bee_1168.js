import fs from 'fs';
const input = fs.readFileSync('stdin', 'utf-8')
const entradas = input.split('\n')


function main() {
    const qtd_leitura = Number(entradas[0])
    calcular_num_leds(qtd_leitura)

}

function calcular_num_leds(limite_leitura) {

    let valor_leitura = entradas[1]

    for (let i = 2; i <= limite_leitura + 1; i++) {
        const num_leds = conferir_leds_necessarios(valor_leitura)
        console.log(`${num_leds} leds`)
        valor_leitura = entradas[i]
    }

}

function conferir_leds_necessarios(valor) {
    //let indice = 0
    const valor_frag = valor.split('')
    let num_leds = 0

    for (let num of valor_frag) {
        num_leds += pegar_num_leds_para_det_num(num)
    }
    return num_leds
}

function pegar_num_leds_para_det_num(valor_recebido) {
    const valor = Number(valor_recebido)

    let valor_retorno = 0

    if (valor == 0 || valor == 9 || valor == 6) {
        valor_retorno = 6
        return valor_retorno
    } else if (valor == 5 || valor == 3 || valor == 2) {
        valor_retorno = 5
        return valor_retorno
    } else if (valor == 8) {
        valor_retorno = 7
        return valor_retorno
    } else if (valor == 7) {
        valor_retorno = 3
        return valor_retorno
    } else if (valor == 4) {
        valor_retorno = 4
        return valor_retorno
    } else {
        valor_retorno = 2
        return valor_retorno
    }
}

main()

import fs from 'fs';
const input = fs.readFileSync('stdin', 'utf-8')
const entradas = input.split('\n')


function main() {

    let inteiros = entradas[0].split(' ').map(Number)

    for (let i = 1; i < entradas.length; i = i + 2) {
        org_dados(inteiros, i + 1)
        inteiros = inteiros = entradas[i].split(' ').map(Number)
    }
}


function org_dados(inteiros, i) {

    const trecho = entradas[i].split('')
    const num_max_caracteres_por_linha = inteiros[2]
    let num_max_linhas = inteiros[1]
    let linhas = 0
    let paginas


    for (let i = 0; i < trecho.length - 1; i++) {

        if (i >= num_max_caracteres_por_linha) {
            linhas++
        }
        if ((linhas / num_max_linhas) >= 1) {
            paginas = (linhas / num_max_linhas).toFixed(0)
        }
    }

    console.log(paginas)
}

main()
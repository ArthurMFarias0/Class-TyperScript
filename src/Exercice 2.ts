class Aviao {
    public veloMax : string
    public ano : number
    public modelo : string
    public companhia : string
}

const airplane : Aviao = new Aviao();
airplane.veloMax = '600km/h'
airplane.ano = 2008
airplane.modelo = 'A320'
airplane.companhia = 'Gol'

console.log('Velocidade máxima: ' + airplane.veloMax)
console.log('Ano de fabricação: ' + airplane.ano)
console.log(`O modelo do avião é ${airplane.modelo}`)
console.log(`A companhia é ${airplane.companhia}\n\n`)
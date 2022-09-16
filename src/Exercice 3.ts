class ProdutoEletronico {
 
    public ano : number
    public modelo : string
    public companhia : string
}

const telephone : ProdutoEletronico = new ProdutoEletronico();
telephone.ano = 2020
telephone.modelo = 'A20'
telephone.companhia = 'Samsung'

console.log('\nAno de fabricação: ' + telephone.ano)
console.log(`O modelo do celular é o  ${telephone.modelo}`)
console.log(`A marca do celular é a ${telephone.companhia}\n\n`)
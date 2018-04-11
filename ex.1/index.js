const Produto = {
    nome: 'Caneta Bic Preta',
    preco:1.90 ,
    desconto: 0.05
}
function clone (objeto){
    return { ...objeto }
}

const novoProduto = clone(Produto)
novoProduto.nome = 'Caneta Bic Vermelha'

console.log(Produto, novoProduto)
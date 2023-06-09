let valor = 0
let confirmacao = ''
let preco = 0
let escolhido = ''
let valorPedido = document.getElementById('valor')
function incluirProduto() {
    let produto = document.getElementById('codigo')
    let quantidade = document.getElementById('quantidade')
    switch(produto.value) {
        case '100':
         preco = 1.20  
         escolhido = 'Cachorro quente'
         break
         case '101':
         preco = 1.30
         escolhido = 'Bauru simples'
         break
         case '102':
         preco = 1.50
         escolhido = 'Bauru com ovo'
         break
         case '103':
         preco = 1.20
         escolhido = 'Hambúrguer'
         break
         case '104':
         preco = 1.30
         escolhido = 'Cheeseburguer'
         break
         case '105':
         preco = 1.00
         escolhido = 'Refrigerante'
         break
         default:
         alert('Código inválido')
         break
    }
        confirmacao = confirm(`Deseja incluir o produto: ${escolhido}`)  
        if(confirmacao) {
        valor += quantidade.value * preco 
        valorPedido.innerHTML = valor
        produto.value = ''
        quantidade.value = ''
        }
        }
         
        function removerProduto() {
         let codigo = prompt('Qual o código do produto que deseja remover?')
         switch(codigo) {
            case '100':
             preco = 1.20  
             escolhido = 'Cachorro quente'
             break
             case '101':
             preco = 1.30
             escolhido = 'Bauru simples'
             break
             case '102':
             preco = 1.50
             escolhido = 'Bauru com ovo'
             break
             case '103':
             preco = 1.20
             escolhido = 'Hambúrguer'
             break
             case '104':
             preco = 1.30
             escolhido = 'Cheeseburguer'
             break
             case '105':
             preco = 1.00
             escolhido = 'Refrigerante'
             break
             default:
             alert('Código inválido')
        }
        confirmacao = confirm(`Deseja remover o produto: ${escolhido}`)  
        if(confirmacao) {
        valor -= preco
        valorPedido.innerHTML = valor
        }
      }
      

      function finalizarPedido() {
         let finalizar = confirm('Deseja finalizar o pedido?')
         if(finalizar) {
            alert(`Pedido finalizado! O valor total ficou R$${valor}`)
            }
            valorPedido.value = 0
      }

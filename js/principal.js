$(document).ready(function() {
    
    var listagem = new ContaCorrente();
    listagem.fetch();
    
    var tabela = new Tabela({
        coll: listagem
    });
    
    var saldo = new Saldo({
        coll: listagem
    });
    
    console.log(listagem);
});


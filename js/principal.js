$(document).ready(function() {

    var listagem = new ContaCorrente();
    listagem.fetch();

    var tabela = new Tabela({
        coll: listagem
    });

    var saldo = new Saldo({
        coll: listagem
    });

    $('#data').datepicker({
        format: "dd/mm/yyyy",
        endDate: "today",
        todayBtn: "linked",
        language: "pt-BR",
        autoclose: true
    });

    $('#valor').maskMoney();
    
    $('#salvar').click(function(){
        var tipo = $('input[name="tipo"]:checked').val();
        var valor = $('#valor').maskMoney('unmasked')[0];
        
        valor = (tipo ==='D')? valor * -1 : valor;
        
        var valores = {
            data: $('#data').val(),
            desc: $('#descricao').val(),
            cat: $('#categoria').val(),
            tipo: tipo,
            valor: valor
        };
        
        console.log(valores);
        listagem.add(valores);
        $('#form-add').modal('hide');
        
        $('input').val('');
        
        console.log(listagem.toJSON());
        
        listagem.update();
    });

});


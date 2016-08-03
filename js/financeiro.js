var Registro = Backbone.Model.extend({
    defaults: {
        data: '',
        desc: '',
        cat: '',
        tipo: 'D',
        valor: 0.0
    }
});

var ContaCorrente = Backbone.Collection.extend({
    model: Registro,
    url: '/js/dados.json'
});

var Tabela = Backbone.View.extend({
    el: '#tbl-cc',
    
    initialize: function(opt){
        this.coll = opt.coll;
        this.listenTo(this.coll, 'sync', this.render);
    },
    
    render: function(){
        
        var el = $(this.el);
        //el.find('tbody').empty();
        
        this.coll.each(function(elem, i){
            var cor = (elem.get('tipo') === 'D') ? 'negativo' : 'positivo';
            var tr  = $('<tr><td>'+elem.get('data')+'</td><td>'+elem.get('desc')+'</td><td>'+elem.get('cat')+'</td><td class="'+cor+'">'+elem.get('tipo')+'</td><td class="valor '+cor+'">'+elem.get('valor')+'</td></tr>');
            
            
            el.find('tbody').append(tr);
        });
        
    }
});

var Saldo = Backbone.View.extend({
    
    el: '#saldo-total',
    
    initialize: function(opt){
        this.coll = opt.coll;
        this.listenTo(this.coll, 'sync', this.render);
    },
    
    render: function(){
        
        var el = $(this.el);
        var saldo = 0;
        var cor = '';

        this.coll.each(function(elem, i){
            saldo += elem.get('valor');
        });
        var cor = (saldo >= 0) ? 'positivo' : 'negativo';
        
        $(this.el).addClass(cor);
        
        $(this.el).html(saldo);
        
        console.log(saldo);
        
    }
});

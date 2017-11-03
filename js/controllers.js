app.controller('PedidosController', function($resource, $timeout, Promos) {
    'use strict';

    var self = this;

    self.promos = [];

    function errorHandler(error) {
        console.log(error.data);
    }

    this.actualizarLista = function() {
        Promos.query()
            .then(function(data) {
                console.log(data);
                self.promos = data;
            })
            .catch(errorHandler);
    };

    this.actualizarLista();

});

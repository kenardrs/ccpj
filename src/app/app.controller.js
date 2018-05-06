(function() {
    'use strict';

    angular
        .module('ccpj')
        .controller('TesteController', TesteController);

    TesteController.$inject = [];
    function TesteController() {
        var vm = this;

        vm.nome = 'kenard';

        activate();

        ////////////////

        function activate() { }
    }
})();
(function() {
    'use strict';

    angular
        .module('ccpj')
        .controller('Teste2Controller', Teste2Controller);

    Teste2Controller.$inject = [];
    function Teste2Controller() {
        var vm = this;
        vm.nome = 'chico'

        activate();

        ////////////////

        function activate() { }
    }
})();
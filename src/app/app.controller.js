(function() {
    'use strict';

    angular
        .module('ccpj')
        .controller('TesteController', TesteController);

    TesteController.$inject = ['$scope'];
    function TesteController($scope) {
        var vm = this;

        vm.nome = 'kenard';

        activate();

        ////////////////

        function activate() { }
    }
})();
'use strict';

describe('TesteController', function() {
     // we work with "vm" instead of "testController" to have consistent verbiage
    // in test and controller
    var ccpj = angular.module('ccpj', [ ]);
    var vm;

    beforeEach(module('ccpj'));
    beforeEach(inject(function ($controller) {
        vm = $controller('TesteController', {}, {});
    }));    

    it('should have a TesteController controller', function() {
        expect(vm).not.toBe(null);

        expect(vm.nome).toEqual('kenard');
    })

})
var app = angular.module('helloworldApp',[]);

app.controller('mainCtrl', function($scope){
    $scope.entradaTexto = 'Hello World!';

    $scope.exibirNomeCompleto = function(nome,sobrenome){
        alert(nome + ' ' + sobrenome);
    }

});
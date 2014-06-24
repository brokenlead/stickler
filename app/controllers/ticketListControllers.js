angular.module("Stickler").controller("ticketListCtrl", function($scope, $filter) {
    var selectedType = null;

    $scope.selectType = function(newType) {
        selectedType = newType;
    };

    $scope.typeFilterFn = function(ticket) {
        return selectedType === null || ticket.supportType === selectedType;
    };
});
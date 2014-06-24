angular.module("Stickler")
.constant("ticketTypeActiveClass", "btn-primary")
.controller("ticketListCtrl", function($scope, $filter, ticketTypeActiveClass) {
    var selectedType = null;

    $scope.selectType = function(newType) {
        selectedType = newType;
    };

    $scope.typeFilterFn = function(ticket) {
        return selectedType === null || ticket.supportType === selectedType;
    };

    $scope.getTypeClass = function(type) {
        return selectedType === type ? ticketTypeActiveClass : "";
    }
});
angular.module("Stickler").controller("sticklerCtrl", function($scope) {
    $scope.data = {
        tickets: [
            {
                assignedTo: "Assignee 1",
                description: "Description of ticket 1",
                openedBy: "Submit 1",
                priorityLevel: 0,
                supportType: "Software",
                status: "New",
                title: "Ticket #1"
            },
            {
                assignedTo: "Assignee 1",
                description: "Description of ticket 2",
                openedBy: "Submit 1",
                priorityLevel: 1,
                supportType: "Hardware",
                status: "New",
                title: "Ticket #2"
            },
            {
                assignedTo: "Assignee 2",
                description: "Description of ticket 3",
                openedBy: "Submit 2",
                priorityLevel: 2,
                supportType: "Software",
                status: "In Progress",
                title: "Ticket #3"
            },
            {
                assignedTo: "Assignee 2",
                description: "Description of ticket 4",
                openedBy: "Submit 1",
                priorityLevel: 0,
                supportType: "Hardware",
                status: "New",
                title: "Ticket #4"
            },
            {
                assignedTo: "Assignee 3",
                description: "Description of ticket 5",
                openedBy: "Submit 3",
                priorityLevel: 3,
                supportType: "Software",
                status: "In Progress",
                title: "Ticket #5"
            }
        ]
    };
});
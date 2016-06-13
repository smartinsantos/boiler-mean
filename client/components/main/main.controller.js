MainController.$inject = ['$scope', '$state', 'ExampleService'];
export {MainController};

function MainController($scope, $state, ExampleService) {
    const vm = this;

    // State
    vm.message = 'HELLO WORLD!';

    // Method
    vm.useServiceMessage = useServiceMessage;

    function useServiceMessage() {
        if (vm.message === 'HELLO WORLD!') {
            vm.message = ExampleService.getMessage();
        } else {
            vm.message = 'HELLO WORLD!';
        }
    }
}



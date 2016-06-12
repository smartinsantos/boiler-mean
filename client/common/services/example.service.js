ExampleService.$inject = ['$http', '$q', '$log'];
export {ExampleService};

function ExampleService($http, $q, $log) {

    const publicApi = {
        request,
        getMessage,
        setMessage
    };

    let _currentMessage = '-- THIS IS AN EXAMPLE MESSAGE FROM SERVICE --';

    function request(config) {
        let deferred = $q.defer();

        $http({
            method: config.method,
            url: config.url,
            data: config.payload || null,
            params: config.params || null
        })
        .success(function (response) {
            deferred.resolve(response);
        })
        .error(function (response) {
            deferred.reject(response || {});
        });

        return deferred.promise; 
    }

    function getMessage() {
        return _currentMessage;
    }

    function setMessage(msg) {
        _currentMessage = msg;
        return _currentMessage;
    }

    return publicApi;

}

app.service('CrudHTTPService', ['$http', '$q', function ($http, $q) {

    this.create = function (url, obj, callback) {
        var $Deferred = $q.defer();

        $http.post(url, obj)
            .then(
                function (response) {
                    if (callback) {
                        callback(null, response);
                    }

                    $Deferred.resolve(response);
                },function(errorMessage) {
                    if (callback) {
                        callback(getErrorMessage(errorMessage), null);
                    }

                    $Deferred.reject(getErrorMessage(errorMessage));
                }
            );

        return $Deferred.promise;
    };

    this.update = function (url, obj, callback) {
        var $Deferred = $q.defer();

        $http.put(url, obj)
            .then(
                function (response) {
                    if (callback) {
                        callback(null, response);
                    }

                    $Deferred.resolve(response);
                },function(errorMessage) {
                    if (callback) {
                        callback(getErrorMessage(errorMessage), null);
                    }

                    $Deferred.reject(getErrorMessage(errorMessage));
                }
            );

        return $Deferred.promise;
    };

    this.read = function (url, callback) {
        var $Deferred = $q.defer();

        $http.get(url)
            .then(
                function (response) {
                    if (callback) {
                        callback(null, response);
                    }

                    $Deferred.resolve(response);
                },function(errorMessage) {
                    if (callback) {
                        callback(getErrorMessage(errorMessage), null);
                    }

                    $Deferred.reject(getErrorMessage(errorMessage));
                }
            );

        return $Deferred.promise;
    };

    this.postDelete = function (url, callback) {
        var $Deferred = $q.defer();

        $http.post(url)
            .then(
                function (response) {
                    if (callback) {
                        callback(null, response);
                    }

                    $Deferred.resolve(response);
                },function(errorMessage) {
                    if (callback) {
                        callback(getErrorMessage(errorMessage), null);
                    }

                    $Deferred.reject(getErrorMessage(errorMessage));
                }
            );

        return $Deferred.promise;
    };

    this.delete = function (url, callback) {
        var $Deferred = $q.defer();

        $http.delete(url)
            .then(
                function (response) {
                    if (callback) {
                        callback(null, response);
                    }

                    $Deferred.resolve(response);
                },function(errorMessage) {
                    if (callback) {
                        callback(getErrorMessage(errorMessage), null);
                    }

                    $Deferred.reject(getErrorMessage(errorMessage));
                }
            );

        return $Deferred.promise;
    };

    var getErrorMessage = function (errorMessage) {
        return errorMessage || 'Error Occurred';
    }

}]);
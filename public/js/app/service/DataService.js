app.service('DataService', ['CrudHTTPService', function (CrudHTTPService) {

    this.alertTriggered = false;

    this.generateAlert = function (data) {

        // get average for the last 2 minutes (12 data-points cover 2 minutes)
        if (data.length >= 12) {

            // get the last 2-minutes worth of data and calculate the average value
            var avg = data.slice(data.length - 12)
                .map(function(a){ return a.loadAvg})
                .reduce(function(a,b) { return a + b; }) / 12;

            if (avg > 1 && !this.alertTriggered) {       // check for a high-load alert
                this.alertTriggered = true;
                return {messageLine1: 'High load generated an alert', messageLine2: 'Load = ' + avg, messageLine3: 'triggered at ' + moment().format('LTS'), bgColor: '#ef3232'};

            } else if (avg < 1 && this.alertTriggered) { // check for a recovery alert
                this.alertTriggered = false;
                return {messageLine1: 'Alert Recovered', messageLine2: '@ ' + moment().format('LTS'), messageLine3: '', bgColor: '#02b702'};
            }
        }

        return null;
    };

    this.getData = function (callback) {
        var url = '/get-data';
        CrudHTTPService.read(url, callback);
    };

}]);
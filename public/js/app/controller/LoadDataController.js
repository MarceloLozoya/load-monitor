app.controller('LoadDataController', ['$interval', 'DataService', function ($interval, DataService) {

    const POLL_INTERVAL = 10000;
    const TEN_MINUTES_MILLIS = 600000;


    var vm = this;

    vm.data = [];
    vm.averages = [[]];
    vm.alerts = [];

    vm.series = ['Load Avg'];
    vm.datasetOverride = [ { yAxisID: 'y-axis-1' } ];

    /**
     *  Options for the data chart
     */
    vm.options = {
        title: { display: true, text: 'Load Data' },
        scales: {
            yAxes: [{
                id: 'y-axis-1',
                type: 'linear',
                display: true,
                position: 'right',
                scaleLabel: { display: true, labelString: 'Load Avg' }
            }],
            xAxes: [{
                type: 'realtime',
                realtime: {
                    duration: TEN_MINUTES_MILLIS,
                    refresh: POLL_INTERVAL,
                    delay: POLL_INTERVAL,
                    pause: false,
                    ttl: undefined
                },
                scaleLabel: { display: true, labelString: 'Time' }
            }]
        },
        animation: { duration: 0 },
        tooltips: { mode: 'nearest', intersect: false },
        hover: { mode: 'nearest', intersect: false }
    };

    /**
     * Init for the controller. Starts the data-polling interval.
     */
    vm.init = function() {
        vm.getData();   // get first data point

        $interval(function() {
            vm.getData();

            var alert = DataService.generateAlert();
            if (alert) {
                vm.alerts.push(alert);
            }

        }, POLL_INTERVAL);
    };

    /**
     * Function that calls the backend for load data
     */
    vm.getData = function() {
        DataService.getData(function (err, response) {
            if (!err) {
                vm.data.push(response.data);
                vm.averages[0].push({x: Date.now(), y:response.data.loadAvg});
            }
        });
    };

}]);
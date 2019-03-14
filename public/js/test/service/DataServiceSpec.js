describe('DataService Test', function(){
    var mockCrudHTTPService, dataServiceObj;

    beforeEach(function(){
        module(function($provide){
            $provide.service('CrudHTTPService', function(){
                this.alert = jasmine.createSpy('alert');
            });
        });

        module('app');
    });

    beforeEach(inject(function(CrudHTTPService, DataService){
        mockCrudHTTPService=CrudHTTPService;
        dataServiceObj = DataService;
    }));

    it('should not generate an alert if there isn\'t enough data provided', function(){
        var dataSet = [{loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}];
        var result = dataServiceObj.generateAlert(dataSet);
        expect(result).toBeNull();
    });

    it('should not generate an alert if the average load is under 1', function(){
        var dataSet = [{loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}];
        var result = dataServiceObj.generateAlert(dataSet);
        expect(result).toBeNull();
    });

    it('should generate an alert if the 2-minute average is over 1', function(){
        var dataSet = [{loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}, {loadAvg: 2}];
        var result = dataServiceObj.generateAlert(dataSet);
        expect(result.messageLine1).toBe('High load generated an alert');
        expect(result.bgColor).toBe('#ef3232');
    });

    it('should generate a recovery alert if an high-load alert was triggered and the 2-minute average is under 1', function(){
        var dataSet = [{loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}, {loadAvg: 0.2}];
        dataServiceObj.alertTriggered = true;
        var result = dataServiceObj.generateAlert(dataSet);
        expect(result.messageLine1).toBe('Alert Recovered');
        expect(result.bgColor).toBe('#02b702');
    });

});
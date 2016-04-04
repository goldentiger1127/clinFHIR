angular.module("sampleApp").controller('menuCtrl', function ( $scope,$rootScope,$localStorage,appConfigSvc,modalService){
    
    $scope.resetConfig = function() {
        delete $localStorage.config;
        appConfigSvc.config();      //set the value to the default
        
        var modalOptions = {
            closeButtonText: 'Ok',
           // actionButtonText: 'Yes, select another',
            headerText: 'Clear cached config',
            bodyText: 'Config has been reset to the default',
            showAction : false
        };

       modalService.showModal({}, modalOptions);

        $rootScope.$broadcast('resetConfigObject');
        //alert('Config has been reset to the default');
    }
});
/// <reference path="..\..\common\references\references.d.ts" />

module flexportal {
    'use strict';
    
    interface IElMachinaScope extends ng.IScope, IMainScope {
        MachineName : string
    }
    
    export class ElMachinaController {
        /* @ngInject */
        constructor($scope: IElMachinaScope, $http: ng.IHttpService) {
            // invoke the created service
            $http.get("/elmachina")
            // Store the result
            .then(r => $scope.MachineName = (<any>r.data).data);
        }
    }
}
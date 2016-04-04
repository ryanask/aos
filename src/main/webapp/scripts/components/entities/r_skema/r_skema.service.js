'use strict';

angular.module('aplikasiApp')
    .factory('R_skema', function ($resource, DateUtils) {
        return $resource('api/r_skemas/:id', {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    data = angular.fromJson(data);
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    });

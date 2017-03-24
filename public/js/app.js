
/**
 * Created by raul on 9/02/17.
 */
'use strict';

var app = angular.module('app', ['ui.router', 'ngTable', 'ngResource', 'ngCookies', 'angularUtils.directives.dirPagination'])

.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])
// .factory('$Comm', function ($http) {
 
//         var URL_BASE = "http://www.mocky.io/v2/57fbba4c0f0000f4124fd451";
 
//         function request(_method, _url, _data){
//             var params="";
 
//             Object.keys(_data).forEach(function (key) {
//                 params += key + "=" + _data[key]  +"&";
//                 console.debug("PARAM: " + key + " -- " + _data[key]);
//             });
 
//             var options = null;
//             if(_method == 'POST'){
//                 options = {
//                     method: 'POST',
//                     url: URL_BASE,
//                     data: params,
//                     headers: {
//                         'Content-Type': 'application/x-www-form-urlencoded'
//                     }
//                 };
//             }
//             else if(_method == 'GET'){
//                 options = {
//                     method: 'GET',
//                     url: URL_BASE,
//                     params: _data
//                 };
//             }
 
//             return $http(options)
//                 .then(function (resp) {
//                     console.log('Success', resp.data);
//                     // For JSON responses, resp.data contains the result
//                     return resp.data;
//                 }, function (err) {
//                     console.error('ERR', err);
//                     // err.status will contain the status code
//                     return null;
//                 });
//         }
//     })
.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: '../views/home/home.html',
            controller: 'homeCtrl'
        })
        .state('detail', {
            url: '/detail',
            templateUrl: '../views/detail/detail.html',
            controller: 'detailCtrl'
        })

    $urlRouterProvider.otherwise('home');
})
.run(['$http', '$cookies', function($http, $cookies) {
  $http.defaults.headers.post['X-CSRFToken'] = $cookies.csrftoken;
}]);
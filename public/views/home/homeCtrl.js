
/**
 * Created by raul on 9/02/17.
 */
'use strict';
const _baseURL = 'http://www.mocky.io/v2/57fbba4c0f0000f4124fd451';
// const CORS = 'http://cors.io/?';

angular.module('app').controller('homeCtrl', function ($state, $http, $scope, $window) {

 // var config = {
 //    headers: { 
 //        'Cache-Control': 'no-cache',
 //        'Content-Type': 'application/json'
 //    }
 // };
 	function sexGnome(man){
 		var genre = '';
 		var sex = man.name;
 		var res = sex.split(" ", 1);
 		var long = res[0].length;
 		var decider = res[0].substring(long-3, long);
 		if(decider == 'wig' || decider == 'tte' || decider == 'lia' || decider == 'onk' || decider == 'lli' || decider == 'zle'){
 			genre = 'Female';
 		} else {
 			genre = 'Male';
 		}
 		console.log(sex);
 		console.log(res);
 		console.log(long);
 		console.log(genre);
 		return genre;
 	}
	// $http({
	// 	method:'GET',
	// 	url:_baseURL,
	// 	dataType : "jsonp",
	// 	headers: {
	// 			// 'Access-Control-Allow-Credentials': 'true',
	// 			'Content-Type':'application/jsonp; charset=utf-8',
	// 			'Access-Control-Allow-Origin': '*'
	// 		}
	// })
	//Método para habilitar el acceso a servidores remotos CORS
	var url = _baseURL+"?callback=JSON_CALLBACK";
	$http.jsonp(url).then(function (data, status, headers, config) {
		var mans = new Array();
		mans = data.data.Brastlewark;
		$scope.mans = mans;
		console.log(data);
		console.log(mans);
	},  function (err) {
        console.error('ERR', err);
        // err.status will contain the status code
        return null;
    });
	// $Comm.get(_baseURL, data);
	$scope.modal = function (man) {
		var sexHab = sexGnome(man);
		console.log(sexHab);
		console.log(man.professions);
  		swal({
		   title: man.name,
		   text: "<span><strong>Age:</strong> "+man.age+" years.</span><br><br>\
		   		  <span><strong>Weight:</strong> "+man.weight+" kg.</span><br><br>\
		   		  <span><strong>Height:</strong> "+man.height+" m.</span><br><br>\
		   		  <span><strong>Hair color:</strong> "+man.hair_color+"</span><br><br>\
		   		  <span><strong>Genre:</strong> "+sexHab+"</span><br><br>\
		   		  <span><strong>Professions:</strong> "+man.professions+"</span><br><br>\
		   		  <span><strong>Friends:</strong> "+man.friends+"</span>\
		   		  ",
		   imageUrl: man.thumbnail,
		   html: true
		});
	};
});

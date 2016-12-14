angular.module('userProfiles').service('mainService', function($http) {



	this.getUsers = function (pgNum) {

		var promise = $http({
			method: 'GET',
			url: 'http://reqres.in/api/users?page='+pgNum
		}).then(function (response) {
			if (response.status === 200) {
					return response.data.data;
			}
			return "error"
		});

		return promise;
	}






});

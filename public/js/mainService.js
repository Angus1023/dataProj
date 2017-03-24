angular.module('mainService').service('mainService',function($http){

  this.getUsers=()=>{
    return $http({
      method: 'GET',
      url: '/api/users'
    });
  };

  this.deleteUsers=(user)=>{
    return $http({
      method: 'DELETE',
      url: '/api/users'
    })
  }

})

angular.module('app.main.sms', [
  'ngCordova'
])
//configuration for the sms state
.config(function($stateProvider){
  $stateProvider
    .state('app.main.sms', {
      url: '/sms',
      views: {
        'sms': {
          templateUrl: 'app/main/sms/sms.html',
          controller: 'SMSCtrl'
        }
      }
    });
})
.controller('SMSCtrl', function($scope, SMSFactory, $state, $ionicGesture){
  //set up test for sending SMS; need to build this out further
  $scope.sendSms = function() {
    console.log('sending sms');
    // SMSFactory.sms($scope.phoneNumber, 'hello from plivo');
    SMSFactory
  }
});
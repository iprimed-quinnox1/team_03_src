// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var scotchApp = angular.module('scotchApp', ['ngRoute']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/featured.html',
                controller  : 'mainController'
            })
			 .when('/home', {
                templateUrl : 'pages/featured.html',
                controller  : 'mainController'
            })


            // route for the about page
            .when('/featured', {
                templateUrl : 'pages/featured.html',
                controller  : 'aboutController'
            })
        
          // route for go's bars
            .when('/listView', {
                templateUrl : 'pages/listView.html',
                controller  : 'aboutController'
            })
			
			.when('/tents', {
                templateUrl : 'pages/tents.html',
                controller  : 'aboutController'
            })
			.when('/blockView', {
                templateUrl : 'pages/blockView.html',
                controller  : 'aboutController'
            })
			.when('/bag_details', {
                templateUrl : 'pages/bag_details.html',
                controller  : 'aboutController'
            })
			
			.when('/bag1', {
                templateUrl : 'pages/bag1.html',
                controller  : 'aboutController'
            })
			.when('/bag2', {
                templateUrl : 'pages/bag2.html',
                controller  : 'aboutController'
            })
			.when('/bag3', {
                templateUrl : 'pages/bag3.html',
                controller  : 'aboutController'
            })
			.when('/bag4', {
                templateUrl : 'pages/bag4.html',
                controller  : 'aboutController'
            })
			.when('/bag5', {
                templateUrl : 'pages/bag5.html',
                controller  : 'aboutController'
            })
			.when('/bag6', {
                templateUrl : 'pages/bag6.html',
                controller  : 'aboutController'
            })
			
            
			.when('/myCarousel', {
                templateUrl : 'pages/bag1.html',
                controller  : 'aboutController'
            })
			.when('/login', {
                templateUrl : 'pages/login.html',
                controller  : 'loginCtrl'
            })
			.when('/register', {
                templateUrl : 'pages/register.html',
                controller  : 'myCntr'
            })
            // route for the contact page
            .when('/bags', {
                templateUrl : 'pages/bags.html',
                controller  : 'contactController'
            });
    });

	// all controllers logic starts from here
    // create the controller and inject Angular's $scope don't forge to inject $http
    scotchApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
		

    });
	
	
	//login controller
	 scotchApp.controller('loginCtrl', function($scope,$http) {
  
		
		                $scope.login=function()
                {
                  if($scope.username == null || $scope.userpassword == null){
                      alert("Are you mad");
                  }
                  var temp = {userName:$scope.username , pass :$scope.userpassword };
				  
                  $http.post("http://localhost:3000/login",temp).then(function(response){
				
                    if(response.data=='true'){
                        alert("successfully logged in ..WELCOME!!!");
						window.location="http://localhost:3000/#/home";
                    }
                    if(response.data=='false'){
                        alert("invalid user..please enter correct credentials!!");
                    }
                  });

                }
		

    });

	//register controller
	 scotchApp.controller("myCntr",function($scope,$http){
       
		
				$scope.comp="";
		$scope.add1="";
		$scope.add2="";
		$scope.city="";
		$scope.state="";
		$scope.country="";
		$scope.phone="";
		$scope.land="";
   $scope.copyIt = function (active) {
     if(active){
        $scope.scomp = $scope.comp;
		$scope.sadd1=$scope.add1;
		$scope.sadd2=$scope.add2;
		$scope.scity=$scope.city;
		$scope.sstate=$scope.state;
		$scope.scountry=$scope.country;
		$scope.sphone=$scope.phone;
		$scope.sland=$scope.land;
    }   else {
        $scope.scomp="";
		$scope.sadd1="";
		$scope.sadd2="";
		$scope.scity="";
		$scope.sstate="";
		$scope.scountry="";
		$scope.sphone="";
		$scope.sland="";
       }
	   
  }
            $scope.sendData = function(){
                var myOb = {gender:$scope.gender,name:$scope.name,lname:$scope.lname,email:$scope.email,pass:$scope.pass,cpass:$scope.cpass,date:$scope.date,comp:$scope.comp,add1:$scope.add1,add2:$scope.add2,city:$scope.city,state:$scope.state,country:$scope.country,phone:$scope.phone,land:$scope.land,scomp:$scope.scomp,sadd1:$scope.sadd1,sadd2:$scope.sadd2,scity:$scope.scity,sstate:$scope.sstate,scountry:$scope.scountry,sphone:$scope.sphone,sland:$scope.sland};
                $http.post("http://localhost:3000/data",myOb).then(function(response){
					
					if(response.data=='true'){
                        alert("successfully registerd!!!");
						window.location="http://localhost:3000/#/login";
                    }
                    
                });
            }
		
    });


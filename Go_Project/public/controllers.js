// all controllers logic starts from here

myApp.controller('mainController', function($scope) {

	$scope.message = 'Everyone come and see how good I look!';

});
// display controller...................................................
myApp.controller('main', function($scope, $http, $rootScope) {

	$scope.x = 'name';
	$scope.cart = function(name) {
		$scope.x = name;
		var myOb = {
			name : $scope.x
		};
		$http.post("http://localhost:3000/displaycat1", myOb).then(
				function(response) {
					$scope.cart1 = response.data;
					window.location = "http://localhost:3000/#/display";
				});

	}

	// display rootscope controller
	$rootScope.cart2 = {};
	$scope.pid = 'p11';
	$scope.PD = function(id) {
		$scope.pid = id;
		console.log('cart root data', $scope.pid);
		var pid = {
			pid : $scope.pid
		};
		$http.post("http://localhost:3000/PD", pid).then(function(response) {

			$rootScope.cart2 = response.data;
			// alert(JSON.stringify($rootScope.cart2));

			console.log('cart root data', $rootScope.cart2);
			window.location = "http://localhost:3000/#/product_details";
		});

	}

	// add to cart.............
	$scope.cid = 'p11';
	$scope.addtocart = function(id) {
		$scope.cid = id;
		console.log('cart dta', $scope.cid);
		// creating the object for cart
		// userid productid img pname qty price
		var obj = {
			userid : "sharath",
			pid : $scope.cid.pid,
			img : $scope.cid.pimage,
			name : $scope.cid.pname,
			price : $scope.cid.pprice
		};

		$http.post("http://localhost:3000/addtocart", obj).then(
				function(response) {

					if (response.data == 'true') {
						alert("successfully added to cart! Go to MyCart!!!");
						// window.location="http://localhost:3000/#/login";
					}

				});

	}
	// .....................................

});

// login controller
myApp
		.controller(
				'loginCtrl',
				function($scope, $http) {

					$scope.login = function() {
						if ($scope.username == null
								|| $scope.userpassword == null) {
							alert("Are you mad");
						}
						var temp = {
							userName : $scope.username,
							pass : $scope.userpassword
						};

						$http
								.post("http://localhost:3000/login", temp)
								.then(
										function(response) {

											if (response.data == 'true') {
												alert("successfully logged in ..WELCOME!!!");
												window.location = "http://localhost:3000/#/home";
											}
											if (response.data == 'false') {
												alert("invalid user..please enter correct credentials!!");
											}
										});

					}

				});

// cart controller...................................................
myApp.controller('cart', function($scope, $http) {

	$scope.cart = function() {

		alert("successfully cart!!!");
		$http.get("http://localhost:3000/cart").then(function(response) {

			$scope.cart = response.data;
			// console.log('cart data',response.data);

		});

	}

});
// my cart controller...................................................
myApp.controller('mycart', function($scope, $http) {

	$scope.cart = function() {

		$http.get("http://localhost:3000/mycart").then(function(response) {

			$scope.cart = response.data;

		});

	}

	// delete item.......

	$scope.deleteitem = function(p) {
		var ob = {
			pid : p
		};

		$http.post("http://localhost:3000/deleteitem", ob).then(
				function(response) {
					alert("successfully deleted!!!");
					// window.location="http://localhost:3000/#/mycart";

				});
		$scope.cart();

	}

});

// register controller
myApp.controller("myCntr", function($scope, $http) {

	$scope.comp = "";
	$scope.add1 = "";
	$scope.add2 = "";
	$scope.city = "";
	$scope.state = "";
	$scope.country = "";
	$scope.phone = "";
	$scope.land = "";
	$scope.copyIt = function(active) {
		if (active) {
			$scope.scomp = $scope.comp;
			$scope.sadd1 = $scope.add1;
			$scope.sadd2 = $scope.add2;
			$scope.scity = $scope.city;
			$scope.sstate = $scope.state;
			$scope.scountry = $scope.country;
			$scope.sphone = $scope.phone;
			$scope.sland = $scope.land;
		} else {
			$scope.scomp = "";
			$scope.sadd1 = "";
			$scope.sadd2 = "";
			$scope.scity = "";
			$scope.sstate = "";
			$scope.scountry = "";
			$scope.sphone = "";
			$scope.sland = "";
		}

	}
	$scope.sendData = function() {
		var myOb = {
			gender : $scope.gender,
			name : $scope.name,
			lname : $scope.lname,
			email : $scope.email,
			pass : $scope.pass,
			cpass : $scope.cpass,
			date : $scope.date,
			comp : $scope.comp,
			add1 : $scope.add1,
			add2 : $scope.add2,
			city : $scope.city,
			state : $scope.state,
			country : $scope.country,
			phone : $scope.phone,
			land : $scope.land,
			scomp : $scope.scomp,
			sadd1 : $scope.sadd1,
			sadd2 : $scope.sadd2,
			scity : $scope.scity,
			sstate : $scope.sstate,
			scountry : $scope.scountry,
			sphone : $scope.sphone,
			sland : $scope.sland
		};
		$http.post("http://localhost:3000/regi", myOb).then(function(response) {

			if (response.data == 'true') {
				alert("successfully registerd!!!");
				window.location = "http://localhost:3000/#/login";
			}

		});
	}

});

// admin controller

myApp.controller("admin", function($scope, $http) {

	$scope.sendData = function() {
		var myOb = {
			pname : $scope.pname,
			pimg : $scope.pimg,
			pcategory : $scope.pcategory,
			pprice : $scope.pprice
		};
		$http.post("http://localhost:3000/admin", myOb).then(
				function(response) {

					if (response.data == 'true') {
						alert("successfully inserted in admin db!!!");
						// window.location="http://localhost:3000/#/display";
					}

				});
	}

});

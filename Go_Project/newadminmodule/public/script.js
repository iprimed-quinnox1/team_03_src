// script.js
//http://localhost

// create the module and name it myApp
// also include ngRoute for all our routing needs
var myApp = angular.module('myApp', ['ngRoute']);

// configure our routes
//localhost
myApp.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/home', {
            templateUrl: 'pages/featured.html',
            controller: 'mainController'
        })





        .when('/cart', {
            templateUrl: 'pages/cart.html',
            controller: 'cart'
        })

        .when('/category1', {
            templateUrl: 'pages/category1.html',
            controller: 'admin'
        })

        .when('/category2', {
            templateUrl: 'pages/category2.html',
            controller: 'category2'
        })

        .when('/category3', {
            templateUrl: 'pages/category3.html',
            controller: 'category3'
        })
        .when('/category4', {
            templateUrl: 'pages/category4.html',
            controller: 'category4'
        })

        .when('/category5', {
            templateUrl: 'pages/category5.html',
            controller: 'category5'
        })

        .when('/display', {
            templateUrl: 'pages/display.html',
            controller: 'display'
        })

        .when('/display2', {
            templateUrl: 'pages/display2.html',
            controller: 'display2'
        })

        .when('/display3', {
            templateUrl: 'pages/display3.html',
            controller: 'display3'
        })

        .when('/display4', {
            templateUrl: 'pages/display4.html',
            controller: 'display4'
        })

        .when('/display5', {
            templateUrl: 'pages/display5.html',
            controller: 'display5'
        })

});

// all controllers logic starts from here
// create the controller and inject Angular's $scope don't forge to inject $http
myApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';


});



//cart controller...................................................
myApp.controller('cart', function ($scope, $http) {


    $scope.cart = function () {

        alert("successfully cart!!!");
        $http.get("http://localhost:3000/cart").then(function (response) {

            $scope.cart = response.data;
            //console.log('cart data',response.data);

        });

    }


});

//display controller...................................................
myApp.controller('display', function ($scope, $http) {


    $scope.cart = function () {


        $http.get("http://localhost:3000/display").then(function (response) {
            // alert("successfully cart!!!");
            $scope.cart1 = response.data;
            
        });

    }
    //deleteRow
    $scope.deleteUser = function (p) {
       // var index = $scope.cart1.indexOf(p);
        var ob = { pid: p.pid };
        $http.post("http://localhost:3000/deleteUser", ob).then(function (response) {
            $scope.cart(); 
        //if(response.data== true){
               
             //   $scope.cart1.splice(index,1);
            //}
            //console.log('my data', response.data);
            //console.log('my data', cart1);
        });

    }


});

//display 2 controller...................................................
myApp.controller('display2', function ($scope, $http) {


    $scope.carts = function () {


        $http.get("http://localhost:3000/display2").then(function (response) {
            alert("successfull!!!");
            $scope.cart2 = response.data;
            console.log('my data', response.data);
            console.log('my data', cart2);



        });

    }

 //deleteRow 2
 $scope.deleteUser2 = function (p) {
    var index = $scope.cart2.indexOf(p);
    var ob= { pid: p.pid };
    $http.post("http://localhost:3000/deleteUser2", ob).then(function (response) {
        //alert("successfully deleted!!!");  
       // window.location="http://localhost:3000/#/display2"; 
    $scope.carts();
    
        //console.log('my data', response.data);
        //console.log('my data', cart1);
    });

}


});



//display 3 controller...................................................
myApp.controller('display3', function ($scope, $http) {


    $scope.cartss = function () {


        $http.get("http://localhost:3000/display3").then(function (response) {
            alert("successfully!!!");
            $scope.cart3 = response.data;
            console.log('my data', response.data);
            console.log('my data', cart3);



        });

    }
//deleteRow 3
$scope.deleteUser3 = function (p) {
    var index = $scope.cart3.indexOf(p);
    var ob= { pid: p.pid };
    $http.post("http://localhost:3000/deleteUser3", ob).then(function (response) {
        //alert("successfully deleted!!!");  
       // window.location="http://localhost:3000/#/display2"; 
    $scope.cartss();
    
        //console.log('my data', response.data);
        //console.log('my data', cart1);
    });

}


});

//display 4 controller...................................................
myApp.controller('display4', function ($scope, $http) {


    $scope.cartsss = function () {


        $http.get("http://localhost:3000/display4").then(function (response) {
            alert("successfully cartsss!!!");
            $scope.cart4 = response.data;
            console.log('my data', response.data);
            console.log('my data', cart4);



        });

    }





//deleteRow 4
$scope.deleteUser4 = function (p) {
    var index = $scope.cart4.indexOf(p);
    var ob= { pid: p.pid };
    $http.post("http://localhost:3000/deleteUser4", ob).then(function (response) {
        //alert("successfully deleted!!!");  
       // window.location="http://localhost:3000/#/display2"; 
    $scope.cartsss();
    
        //console.log('my data', response.data);
        //console.log('my data', cart1);
    });

}

});
//display 5 controller...................................................
myApp.controller('display5', function ($scope, $http) {


    $scope.cartssss = function () {


        $http.get("http://localhost:3000/display5").then(function (response) {
            alert("successfully cartssss!!!");
            $scope.cart5 = response.data;
            console.log('my data', response.data);
            console.log('my data', cart5);



        });

    }

    
//deleteRow 5
$scope.deleteUser5 = function (p) {
    var index = $scope.cart5.indexOf(p);
    var ob= { pid: p.pid };
    $http.post("http://localhost:3000/deleteUser5", ob).then(function (response) {
        //alert("successfully deleted!!!");  
       // window.location="http://localhost:3000/#/display2"; 
    $scope.cartssss();
    
        //console.log('my data', response.data);
        //console.log('my data', cart1);
    });

}

});







//admin controller

myApp.controller("admin", function ($scope, $http) {



    $scope.sendData = function () {
        var myOb = { pimage: $scope.pimage, pname: $scope.pname, pid: $scope.pid, pcategory: $scope.pcategory, ptype: $scope.ptype, pdesc: $scope.pdesc, pprice: $scope.pprice, pbrand: $scope.pbrand, pcolour: $scope.pcolour, psize: $scope.psize, pdimen: $scope.pdimen, pguide: $scope.pguide };
        $http.post("http://localhost:3000/data", myOb).then(function (response) {

            if (response.data == 'true') {
                alert("successfully inserted in category1 db!!!");
                window.location = "http://localhost:3000/#/display";
            }

        });
    }

});
//category 2 controller

myApp.controller("category2", function ($scope, $http) {



    $scope.sendData = function () {
        var myOb = { pimage: $scope.pimage, pname: $scope.pname, pid: $scope.pid, pcategory: $scope.pcategory, ptype: $scope.ptype, pdesc: $scope.pdesc, pprice: $scope.pprice, pbrand: $scope.pbrand, pcolour: $scope.pcolour, psize: $scope.psize, pdimen: $scope.pdimen,pwood: $scope.pwood, piron: $scope.piron, pflex: $scope.pflex, ploft: $scope.ploft, pguide: $scope.pguide };
        $http.post("http://localhost:3000/data2", myOb).then(function (response) {

            if (response.data == 'true') {
                alert("successfully inserted in category 2 db!!!");
                window.location = "http://localhost:3000/#/display2";
            }

        });
    }

});

//category 3 controller

myApp.controller("category3", function ($scope, $http) {



    $scope.sendData = function () {
        var myOb = { pimage: $scope.pimage, pname: $scope.pname, pid: $scope.pid, pcategory: $scope.pcategory, ptype: $scope.ptype, pprice: $scope.pprice, pcolour: $scope.pcolour, psize: $scope.psize, pdimen: $scope.pdimen,pmodel: $scope.pmodel,pweight: $scope.pweight,pzoom: $scope.pzoom,pguide: $scope.pguide };
        $http.post("http://localhost:3000/data3", myOb).then(function (response) {

            if (response.data == 'true') {
                alert("successfully inserted in category 3 db!!!");
                window.location = "http://localhost:3000/#/display3";
            }

        });
    }

});

//category 4 controller

myApp.controller("category4", function ($scope, $http) {



    $scope.sendData = function () {
        var myOb = { pimage: $scope.pimage, pname: $scope.pname, pid: $scope.pid, pcategory: $scope.pcategory, ptype: $scope.ptype, pprice: $scope.pprice, pcolour: $scope.pcolour, psize: $scope.psize, pdimen: $scope.pdimen,pwarranty: $scope.pwarranty, pguide:$scope.pguide };
        $http.post("http://localhost:3000/data4", myOb).then(function (response) {

            if (response.data == 'true') {
                alert("successfully inserted in category 4 db!!!");
                window.location = "http://localhost:3000/#/display4";
            }

        });
    }

});

//category 5 controller

myApp.controller("category5", function ($scope, $http) {



    $scope.sendData = function () {
        var myOb = { pimage: $scope.pimage, pname: $scope.pname, pid: $scope.pid, pcategory: $scope.pcategory, ptype: $scope.ptype, pprice: $scope.pprice, pcolour: $scope.pcolour, psize: $scope.psize, pdimen: $scope.pdimen, pguide:$scope.pguide};
        $http.post("http://localhost:3000/data5", myOb).then(function (response) {

            if (response.data == 'true') {
                alert("successfully inserted in category 5 db!!!");
                window.location = "http://localhost:3000/#/display5";
            }

        });
    }

});

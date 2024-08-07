window.UpdateNguoidungController = function($scope, $http, $routeParams, $location) {
    $scope.listUser = {
        numericalOrder : "",
        fullName : "",
        email : "",
        role : ""
    }

    var url = "http://localhost:3000/listUsers";
    var urlUpdate = url + "/" + $routeParams.id
    $http.get(urlUpdate)
        .then(function(response){
            console.log(response.data)
            $scope.listUser = response.data
        })
        .catch(function(error){
            console.log("Lỗi API");
        })

    // load all user 
    var url2 = "http://localhost:3000/users";
    $scope.user1 = []
    $http.get(url2)
        .then(function(response){
            $scope.user1 = response.data
        })
        .catch(function(error){
            console.log("Lỗi API")
        })
    
    // sửa 
    $scope.update = function(){
        if(validate()) {
            let data = angular.copy($scope.listUser)
        $http.put(urlUpdate, data)
            .then(function(response){
                alert("Sửa thành công")
                $location.path("/")
            })
            .catch(function(error){
                console.log("Lỗi API")
            })
        }
    } 


    // validate
    $scope.validate = {
        numericalOrderValidate : false,
        fullNameValidate : false,
        emailValidate : false,
        roleValidate : false,
    }

    function validate() {
        let check = true
        if($scope.listUser.numericalOrder == ""){
            $scope.validate.numericalOrderValidate = true
            check = false
        }
        if($scope.listUser.fullName == ""){
            $scope.validate.fullNameValidate = true
            check = false
        }
        if($scope.listUser.email == ""){
            $scope.validate.emailValidate = true
            check = false
        }
        if($scope.listUser.role == ""){
            $scope.validate.roleValidate = true
            check = false
        }
        return check
    }

    // khi nhập dữ liệu tự động bỏ validate
    $scope.changeNumericalOrder = function() {
        if($scope.listUser.numericalOrder == "") {
            $scope.validate.numericalOrderValidate = true
        }else{
            $scope.validate.numericalOrderValidate = false
        }
    }
    $scope.changeFullName = function() {
        if($scope.listUser.fullName == "") {
            $scope.validate.fullNameValidate = true
        }else{
            $scope.validate.fullNameValidate = false
        }
    }
    $scope.changeEmail = function() {
        if($scope.listUser.email == "") {
            $scope.validate.emailValidate = true
        }else{
            $scope.validate.emailValidate = false
        }
    }
    $scope.changeRole = function() {
        if($scope.listUser.role == "") {
            $scope.validate.roleValidate = true
        }else{
            $scope.validate.roleValidate = false
        }
    }
}
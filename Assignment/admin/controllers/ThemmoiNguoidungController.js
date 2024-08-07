window.ThemmoiNguoidungController = function($scope, $http, $location){
    var url = "http://localhost:3000/listUsers";
    $scope.listUser = {
        numericalOrder : "",
        fullName : "",
        email : "",
        role : ""
    }

    // thêm 
    $scope.save = function() {
        if(validate()) {
            let listUser = angular.copy($scope.listUser)
        $http.post(url, listUser)
            .then(function(response){
                alert("Thêm thành công!")
                $location.path("/")
            })
            .catch(function(error){
                console.log("Lỗi API")
            })
        }    
    }

    // xóa trắng form
    $scope.cancel = function(){
        $scope.listUser = {
            numericalOrder : "",
            fullName : "",
            email : "",
            role : ""
        }
    }

    // lấy danh sách user
    var url2 = "http://localhost:3000/users";
    $scope.user1 = []
    $http.get(url2)
        .then(function(response){
            $scope.user1 = response.data
        })
        .catch(function(error){
            console.log("Lỗi API")
        })

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
    

       // validate email using regex
       function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
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
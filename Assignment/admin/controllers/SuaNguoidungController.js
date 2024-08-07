window.SuaNguoidungController = function($scope, $http, $routeParams, $location) {
    console.log($routeParams.id)
    var url = "http://localhost:3000/nguoidung"
        // tạo biến truyền giá trị vào html
    $scope.nguoidung = {
        code: "",
        name: "",
        email: "",
        role: ""
    }

    // load
    $http.get(url + "/" + $routeParams.id)
        .then(function(response) {
            $scope.nguoidung = response.data
        })
        .catch(function(response) {
            console.log("Lỗi API")
        })

    // SỬA
    $scope.updateNguoidung = function() {
        if (validate()) {
            let data = angular.copy($scope.nguoidung)
            $http.put(url + "/" + $routeParams.id, data)
                .then(function(response) {
                    alert("Sửa thành công")
                    $location.path("/")
                        // $location.replace();
                })
                .catch(function(error) {
                    console.log("Lỗi API")
                })
        }
    }

    // validate
    $scope.validateMaMessage = "";
    $scope.validateMa = false;
    $scope.validateTenMessage = "";
    $scope.validateTen = false;
    $scope.validateEmailMessage = "";
    $scope.validateEmail = false;
    $scope.validateRoleMessage = "";
    $scope.validateRole = false;

    function validate() {
        let check = true;
        // kiểm tra nhập mã hay chưa
        if ($scope.nguoidung.code === "") {
            $scope.validateMa = true;
            $scope.validateMaMessage = "Mã không được để trống!";
            check = false;
        }
        // kiểm tra nhập tên hay chưa
        if ($scope.nguoidung.name === "") {
            $scope.validateTen = true;
            $scope.validateTenMessage = "Tên không được để trống!";
            check = false;
        }
        // Kiểm tra nhập email hay chưa và kiểm tra định dạng email
        if ($scope.nguoidung.email === "") {
            $scope.validateEmail = true;
            $scope.validateEmailMessage = "Email không được để trống!";
            check = false;
        } else if (!validateEmailFormat($scope.nguoidung.email)) {
            $scope.validateEmail = true;
            $scope.validateEmailMessage = "Email không đúng định dạng!";
            check = false;
        }
        // Kiểm tra nhập tên vai trò hay chưa
        if ($scope.nguoidung.role === "") {
            $scope.validateRole = true;
            $scope.validateRoleMessage = "Vui lòng chọn vai trò!";
            check = false;
        }

        return check
    }

    // Kiểm tra định dạng email sử dụng regular expression
    function validateEmailFormat(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // khi nhập tự động bỏ validate
    $scope.changeMa = function() {
        if ($scope.nguoidung.code === "") {
            $scope.validateMa = true;
        } else {
            $scope.validateMa = false;
        }
    };

    $scope.changeTen = function() {
        if ($scope.nguoidung.name === "") {
            $scope.validateTen = true;
        } else {
            $scope.validateTen = false;
        }
    };

    $scope.changeEmail = function() {
        if ($scope.nguoidung.email === "") {
            $scope.validateEmail = true;
        } else {
            $scope.validateEmail = false;
        }
    };

    $scope.changeVaitro = function() {
        if ($scope.nguoidung.role === "") {
            $scope.validateRole = true;
        } else {
            $scope.validateRole = false;
        }
    };
}
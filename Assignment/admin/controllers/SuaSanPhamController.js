window.SuaSanPhamController = function($scope, $http, $routeParams, $location) {
    // tạo biến truyền giá trị vào html
    $scope.dienthoai = {
            code: "",
            name: "",
            firm: "",
            price: 0,
            describe: ""
        }
        // cal API
    var url = "http://localhost:3000/sanpham"
    let id = $routeParams.id
    $http.get(url + "/" + id)
        .then(function(response) {
            $scope.dienthoai = response.data
        })
        .catch(function(error) {
            console.log("Lỗi API")
        })

    // sửa
    $scope.updateSanPham = function() {
        if (validate()) {
            let data = angular.copy($scope.dienthoai)
            $http.put(url + "/" + id, data)
                .then(function(response) {
                    alert("Sửa thành công")
                    $location.path("/san-pham")
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
    $scope.validateHangMessage = "";
    $scope.validateHang = false;
    $scope.validateGiaMessage = "";
    $scope.validateGia = false;

    function validate() {
        let check = true;
        if ($scope.dienthoai.code === "") {
            $scope.validateMa = true;
            $scope.validateMaMessage = "Mã không được để trống!";
            check = false;
        }
        if ($scope.dienthoai.name === "") {
            $scope.validateTen = true;
            $scope.validateTenMessage = "Tên không được để trống!";
            check = false;
        }
        if ($scope.dienthoai.firm === "") {
            $scope.validateHang = true;
            $scope.validateHangMessage = "Vui lòng chọn hãng";
            check = false;
        }
        if (isNaN($scope.dienthoai.price) || !isFinite($scope.dienthoai.price) || Number($scope.dienthoai.price) < 100) {
            $scope.validateGia = true;
            $scope.validateGiaMessage = "Giá phải là số và giá lớn hơn 100";
            check = false;
        }
        return check
    }

    // khi nhập tự dộng bỏ validate
    $scope.changeMa = function() {
        if ($scope.dienthoai.code === "") {
            $scope.validateMa = true;
        } else {
            $scope.validateMa = false;
        }
    };
    $scope.changeTen = function() {
        if ($scope.dienthoai.name === "") {
            $scope.validateTen = true;
        } else {
            $scope.validateTen = false;
        }
    };
    $scope.changeHang = function() {
        if ($scope.dienthoai.firm === "") {
            $scope.validateHang = true;
        } else {
            $scope.validateHang = false;
        }
    };
    $scope.changeGia = function() {
        if ($scope.dienthoai.price === "") {
            $scope.validateGia = true;
        } else {
            $scope.validateGia = false;
        }
    };
}
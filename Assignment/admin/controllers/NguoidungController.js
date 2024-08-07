window.NguoidungController = function($scope, $http) {
    var url = "http://localhost:3000/nguoidung";
    // call API LẤY DỮ LIEUJ TỪ DB.SON LÊN TABLE
    $scope.listUser = []
    $http.get(url)
        .then(function(response) {
            $scope.listUser = response.data
        })
        .catch(function(error) {
            console.log("Không gọi được API")
        })

    // delete
    $scope.delete = function(id) {
        let check = confirm("Bạn có muốn xóa không? ")
        if (check) {
            $http.delete(url + "/" + id)
                .then(function(response) {
                    alert("Xóa thành công")
                })
                .catch(function(error) {
                    console.log("Lỗi API")
                })
        }
    }
}
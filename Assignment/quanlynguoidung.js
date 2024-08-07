

var myApp = angular.module("myApp", [])

myApp.container("parent", $scope => {
    $scope.students = [
        {
            numericalOrder: "1",
            fullName: "Lê Minh Chiến",
            email: "chienleminh703@gmail.com",
            role: "Admin"
        },
        {
            numericalOrder: "2",
            fullName: "Lê Phúc Phong",
            email: "phucphong68@gmail.com",
            role: "Admin"
        }
    ]

    $scope.student = {
        numericalOrder: "",
        fullName: "",
        email: "",
        role: ""
    }
})

myApp.controller("form", $scope => {

})

myApp.controller("table", $scope => {

})

// var myApp = angular.module("myApp", [])

// myApp.controller("parent", $scope => {
//     $scope.students = [
//         {
//             fullname: "Nguyễn Văn Tèo",
//             birthday: "20-01-1995",
//             point: "8.5"
//         },
//         {
//             fullname: "Phạm Thị Nở",
//             birthday: "15-11-1985",
//             point: "8"
//         },
//         {
//             fullname: "Nguyễn Văn Nhất",
//             birthday: "20-11-1975",
//             point: "9"
//         }
//     ]

//     //  object
//     $scope.student = {
//         fullname: "",
//         birthday: "",
//         point: ""
//     }
//     // khai báo mặc định khi chạy web là thêm mới
//     $scope.indexUpdate = undefined

// })

// myApp.controller("form", $scope => {
//     $scope.save = function () {
//         if ($scope.$parent.indexUpdate == undefined) {
//             // thêm mới
//             let student = angular.copy($scope.$parent.student)
//             $scope.$parent.students.push(student)
//             $scope.cancel()
//         } else {
//             //sửa
//             let student = angular.copy($scope.$parent.student)
//             let index = $scope.$parent.indexUpdate
//             $scope.$parent.students.splice(index, 1, student)
//             $scope.cancel()
//             $scope.$parent.indexUpdate = undefined
//         }

//     }
//     $scope.cancel = function () {
//         // xóa trắng form
//         $scope.$parent.student = {
//             fullname: "",
//             birthday: "",
//             point: ""
//         }
//         $scope.$parent.indexUpdate = undefined
//     }
// })

// myApp.controller("table", $scope => {
//     // show dữ liệu lên form
//     $scope.saveIndex = function (index) {
//         $scope.$parent.indexUpdate = index
//         let student = angular.copy($scope.$parent.students[index])
//         $scope.$parent.student = student


//     }
//     $scope.delete = function (index) {
//         let check = confirm("Bạn có muốn xóa không?")
//         if (check) {
//             $scope.$parent.students.splice(index, 1)
//         }
//     }
// })



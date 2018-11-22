var app= angular.module("myApp",[])
app.controller("myCtrl", function($scope) {
 $scope.items=[
        {
            name: "Nikhil Sharma",
            gender: "male",
            designation: "Team Lead",
            project: "AFTP"
        },
        {
            name: "Somya Ranjan",
            gender: "male",
            designation: "Team Lead",
            project: "Automation"
        },
        {
            name: "Narasimha",
            gender: "male",
            designation: "Manager",
            project: "AIDTD"
        },
        
        
    ]
    
    
     }
);

app.directive('fileUpload', function(){
                   return {
                      restrict: 'E',
                       template: "<div class='file-uplaod'><input type='file'></div>",
                       
                         }
            
});


    

app.directive('mybox',function(){
      return{
          restrict: 'EA',
          template: '<div ng-repeat="item in items"><div class="well" style="border: 2px solid black; width: 40%; text-align: center"><p>Name: {{item.name}}</p><p>Gender: {{item.gender}}</p><p>Designation: {{item.designation}}</p><p>Project: {{item.project}}</p></div><br></div> '   
      }
});
app.directive('likeBox',function(){
    return{
        restrict: 'E',
        transclude: true,
        scope:{
            
        },
        template: '<div class="likebox"><ng-transclude></ng-transclude></div>',
        controller: function($scope){
                            $scope.Count = 0;
                            $scope.ClickAction = function(index){
                            $scope.Count++
                           }
       
    }
    
    }
    })
app.directive('scrollTop', function(){
                   return{
                       restrict: 'E',
                       template:'<div><a class="scrolltop" ng-click="backToTop()" >Top</a></div>',
                       controller : function($scope){
                           $scope.backToTop= function(){
                          $('html, body').animate({scrollTop : 0},800);
                           
                           }
                       }
                   }
                       }
                   );

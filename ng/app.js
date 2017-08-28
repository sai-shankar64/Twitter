var app=angular.module('app',[])
app.controller('PostsCtrl',function($scope,PostsSvc){
     //$http.get('http://localhost:3000/api/posts').then(function(posts){
         PostsSvc.fetch().then(function(posts){
                $scope.posts=posts.data
                })
            $scope.addPost=function(){
                if($scope.postBody){
                    //$http.post('/api/posts',{
                    PostsSvc.create({
                        username:"shankar",
                        body:$scope.postBody
                    }).then(function(post){
                        $scope.posts.unshift(post)
                    $scope.postBody=null
                    })
                }
                //$http.get('http://localhost:3000/api/posts').then(function(posts){
             PostsSvc.fetch().then(function(posts){
                $scope.posts=posts.data
                })
            }
            
})
app.service('PostsSvc',function($http){
    this.fetch=function(){
        return $http.get('/api/posts')
    }
    this.create=function(post){
        return $http.posts('/api/posts',post)
    }
})
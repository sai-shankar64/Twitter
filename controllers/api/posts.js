var Post=require('../../models/post')
var router=require('express').Router()
//module.exports=function(app){
router.get('/',function(req,res,next){
//app.get('/api/posts',function(req,res,next){
    Post.find()
    .sort('-date')
    .exec(function(err,posts){
            if(err) { return next(err)}
            res.json(posts)
    })
})
//app.post('/api/posts',function(req,res,next){
router.post('/',function(req,res,next){
    var post=new Post({
        username:req.body.username,
        body:req.body.body
    })
    post.save(function(err,post){
            if(err) { return next(err)}
            res.json(201,post)
    })
})
module.exports=router
/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Articles = require("../models/Articles");

module.exports = {
  list: (req,res)=>{
      Articles.find().then((err,articles)=>{
          if(err){
              res.send(500,{err:err});
          }  
          res.send({articles:articles});
        //   res.view('articles/articles',{articles:articles});
      })
  },
  edit:(req,res)=>{
      Articles.find({id:req.params.id}).exec((err,article)=>{
          if(err){
              res.send(500,{err:err});
          }
          res.view('articles/edit',{article:article})
      })
  },
  delete:(req,res)=>{
    Articles.destroy({id:req.params.id}).exec((err)=>{
        if(err){
            res.send(500,{err:err});
        }
        res.redirect('/articles/list')
    })
  },
  update:(req,res)=>{
      const title = req.body.title;
      const body = req.body.body;
      Articles.update({id:req.params.id}).exec((err)=>{
        if(err){
            res.send(500,{err:err});
        }
        res.redirect('/articles/list')
    })
  }

};


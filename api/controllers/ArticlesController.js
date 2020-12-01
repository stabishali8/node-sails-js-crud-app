/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { Sails } = require("sails");

// const Articles = require("../models/Articles");

module.exports = {
  list: (req,res)=>{
      Articles.find().exec((err,articles)=>{
          if(err){
              return res.status(500).send({err:err});
          }
          sails.log.debug("test string");  
          return res.json({articles:articles});
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


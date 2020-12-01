/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { Sails } = require("sails");

// const Articles = require("../models/Articles");

module.exports = {
    create:(req,res)=>{
        sails.log.debug("before add call")
        Articles.create({title:req.body.title,body:req.body.body}).exec((err,article)=>{
            if(err){
                return res.send(500,{err:err});
            }
            sails.log("add call");
            return res.json({article:article});
        })
    },
    retrieve: (req,res)=>{
        sails.log.debug("before view call");  
        Articles.find().exec((err,articles)=>{
            if(err){
                return res.status(500).send({err:err});
            }
            sails.log.debug("view call");  
            return res.json({articles:articles});
        })
    },
    delete:(req,res)=>{
        sails.log.debug("before delete call")
        Articles.destroy({id:req.params.id}).exec((err)=>{
            if(err){
                return res.send(500,{err:err});
            }
            sails.log.debug("delete call");  
            return res.status(200).send("ok")
        })
    },
    update:(req,res)=>{
        sails.log.debug("before update call")
        const title = req.body.title;
        const body = req.body.body;
        Articles.update({id:req.params.id},{title:title,body:body}).exec((err)=>{
            if(err){
                return res.status(500).send({err:err});
            }
            sails.log.debug("before update call")
            return res.status(200).send(`ok`);
        })
    }

};


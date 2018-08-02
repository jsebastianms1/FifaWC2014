const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get('/getTeams',(req,res)=>{
    controller.fifaController.teams()
        .then((result)=>{
            res.status(200).json(result);
        }).catch((err)=>{
            res.status(500).json(err);
        })
})

module.exports = router;
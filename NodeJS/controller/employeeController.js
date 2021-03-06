const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


var { Employee } = require('../models/employee');
var ObjectId = require('mongoose').Types.ObjectId;

router.get('/', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) { res.send(docs) }
        else {
            console.log("Error:" + JSON.stringify(err, undefined, 2));
        }
    })
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ' + req.params.id)

    Employee.findById(req.params.id, (err, docs) => {
        if (!err) {
            res.send(docs);
        }
        else {
            console.log("Error:" + JSON.stringify(err, undefined, 2))
        }
    });
});

router.post('/', (req, res) => {
    var emp = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Save:' + JSON.stringify(err, undefined, 2)) }
    })
})

router.put((req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record of this Id:' + (req.params.id));
    var emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    }
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, docs) => {
        if (!err) { res.send(docs) }
        else { console.log("Error:" + JSON.stringify(err, undefined, 2)) }
    });
})

router.delete((req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('No record of this Id:' + (req.params.id))
        
    Employee.findByIdAndRemove(req.params.id,(err,docs)=>{
        if(!err){res.send(doc);}
        else{console.olog('Error in Employee Delete:'+JSON.stringify(err,undefined,2))}
    })
    
})
module.exports = router;
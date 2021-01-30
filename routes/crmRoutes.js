const express=require('express');
const { getToDos, addNewToDo, deleteToDo }=require('../controller/todoController.js');
const router=express.Router();

router.route('/todo')
    .get(getToDos)
    .post(addNewToDo)
    .delete(deleteToDo);

module.exports = router;
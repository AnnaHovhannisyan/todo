const {crmModel}=require('../model/crmModel.js');

class todoController{


   async getToDos(req,res){
let result=await crmModel.find();
       console.log(result);
res.render('todo',{data:result})

    }
   async addNewToDo(req,res){
        console.log(req.body);
        let result = await crmModel.create({item:req.body.item});
        res.json(result)

    }
  async  deleteToDo(req,res){
            console.log(req.body);
            let result=await crmModel.deleteOne(req.body);
            res.json(result)

        }
}

module.exports=new todoController();


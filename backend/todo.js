const express=require('express');
const db=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
app.use(bodyParser.json());
app.use(cors());


db.connect('mongodb://localhost:27017/todo',{
    family:4
});

db.connection.on('error',console.error.bind(console,"error while connect"));
db.connection.once('open',()=>{
    console.log('DB connected');
});
const List=db.model('list',new db.Schema({

    title:String,
    description:String

}));


app.post('/pos',async(req,res)=>{
    const list=await new List (req.body).save();
    res.send(list);
});

app.get('/lists', async (req, res) => {
    const lists = await List.find(); 
      res.send(lists)
  });


  app.get('/getbyid/:id',async(req,res)=>{
    const id=req.params.id;
    const li=await List.findOne({_id:id});
    res.send(li);
  })
 

  app.put('/upd/:id', async (req, res) => {
   const id=req.params.id;
   const {title,description}=req.body;
      const list = await List.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
      res.send(list); 
   
  });
  
 
  app.delete('/del/:id', async (req, res) => {
    
      const list = await List.findByIdAndDelete(req.params.id); 
      
      res.send(list); 
   
  });

  app.listen(3000);
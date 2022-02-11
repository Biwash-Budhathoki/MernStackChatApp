const express = require("express");  //importing express
const { chats } = require("./data/data.js" ); //importing chats
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

const app = express();                      //instance of an express variable
dotenv.config();

connectDB();

app.get("/",(req,res) => {
    res.send("API is running successfully!!");
});                                             //creating api, (req,res) are callbacks

app.get("/api/chat",(req,res) =>{
    res.send(chats);
});                                             //sending chat data from data.js


app.get("/api/chat/:id", (req,res) => {
      //  console.log(req.params.id);

    const singleChat = chats.find((c) => c._id === req.params.id);
    res.send(singleChat);

}); //req.params.id =  id that we provide, getting single chat data by id



const PORT = process.env.PORT || 5000;


//with the help of 'app' variable we can start our own server

app.listen(5000, console.log("Server Started on PORT 5000")) ;  //Server is created. And to hide port address .env file is created
                                                               






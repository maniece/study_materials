var express = require("express"),
app=express(),
bodyParser = require('body-parser'),
port=8091;

/************ PERMISSION TO ACCESS THE JSON VALUE FROM OUTSIDE  **********/
app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
/**************************************************************************/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",(req,res)=>{
  res.send('Hello World');
});

app.get("/sampleData",(req,res)=>{
  var dataToSend = {
            "data1":[
                {"Name":"Mani1","class":"lkg"},
                {"Name":"Mani2","class":"ukg"},
            ],
            "data2":[
                {"Name":"Mani3","class":"ukg"},
                {"Name":"Mani4","class":"lkg"},
            ]
        };
  //  var dataToSend = {"Type":["Banana","Apple"]};
   res.send(dataToSend);
})

app.listen(port,()=>{
  console.log("App is running on the port 8091");
});

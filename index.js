const express = require('express');
const app = express();
const ejs = require('ejs');
const path =require('path');
const qrcode = require('qrcode');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'view'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/scan',(req,res)=>{
    const inp_txt = req.body.text;
    qrcode.toDataURL(inp_txt,(err,src)=>{
        res.render('scan',{
            qr_code:src,
        });
    })
})
const PORT = process.env.PORT;

app.listen(PORT);

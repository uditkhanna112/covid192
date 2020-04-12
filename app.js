var express=require('express')
var app=express();
var bodi=require('body-parser');
var axios=require('axios');
var x=require('./assets/cname.js');
var states=require('./assets/states');
app.use('/assets',express.static('assets'))
app.use(bodi.urlencoded({extended:true}));


app.get('/',(req,res)=>{
res.render("home.ejs");
});

app.get('/finder',(req,res)=>{

res.render("finder.ejs",{cname:x});
})

app.get('/states',(req,res)=>{
    res.render("states.ejs",{states:states})
})

app.post('/state2',(req,res)=>{
    var x2=req.body.cname;
    var y2=x2.split('-');
    let a11=Number(y2[0]);
    axios.get("https://api.covid19india.org/v2/state_district_wise.json").then(resp=>{
        let a22=resp.data[a11-1].districtData;
        
        let st=resp.data[a11-1].state;
res.render("display2.ejs",{data:a22,state:st});
    }).catch((err)=>{
        console.log(err);
    })
})




app.post('/virus',(req,res)=>{
var x=req.body.cname;
var y=x.split('-');
let a1;
let a2;
console.log(y[1]);
axios.get("https://corona-api.com/countries/"+y[1]).then(response=>{
    a1=response.data.data.latest_data;
    var data=[
{
deaths:a1.deaths,
confirmed:a1.confirmed,
recovered:a1.recovered,
    critical:a1.critical,
country:response.data.data.name
       }

  ]


    res.render("display.ejs",{data:data}); 
});
});


app.listen(process.env.PORT||3000);
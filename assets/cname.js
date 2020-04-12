var axios=require('axios');
var countries=[];
        

axios.get("https://corona-api.com/countries").then(response=>{
for(var i=0;i<response.data.data.length;i++){
        countries[i]=response.data.data[i].name+"  "+"-"+response.data.data[i].code;
        }

        }).catch(()=>{
           
        })
        module.exports=countries;
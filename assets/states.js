var axios=require('axios');
var x=[];
    axios.get('https://api.covid19india.org/v2/state_district_wise.json').then(response=>{
        for(var i=0;i<response.data.length;i++)   
        x[i]=(i+1)+"-"+response.data[i].state;
        })

        module.exports=x;
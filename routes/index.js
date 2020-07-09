var router = require('express').Router();
const axios = require('axios');



router.get('/',(req,res)=>{
  res.render('home');
    
    //res.render('home');
    /*const getData = async () => {
        try {
          const result = await axios.get('localhost:4000/pnt/all');
      
          return result
        } catch (e) {
          console.log('error occured')
        }
      };
   
   axios.get('http://localhost:4000/ply/all/').then((response)=>{
    res.send(response.data);
   }).catch(e=>{
    console.log(e);
   });
     */  
});


module.exports = router;
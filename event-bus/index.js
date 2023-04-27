require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());


app.post("/events", (req, res) => {
  const event = req.body;


  const URL_ADD= process.env.URL_SRV_ADD_POINTS 
  ? process.env.URL_SRV_ADD_POINTS+"/events" 
  : "http://localhost:8060/events" 

  const URL_REDEEM= process.env.URL_SRV_REDEEM_POINTS 
  ? process.env.URL_SRV_REDEEM_POINTS+"/events" 
  : "http://localhost:8062/events" 

  const URL_QUERY=  process.env.URL_SRV_QUERY 
  ? process.env.URL_SRV_QUERY+"/events" 
  : "http://localhost:8061/events" 


  console.log('event recibido : ',process.env.URL_SRV_QUERY+"/events" ,event)

  //Redeem points
  axios.post(URL_REDEEM, event).catch((err) => {console.log(' Redeem 8062', err.message);});

  // add points
  axios.post(URL_ADD, event).catch((err) => {console.log(' add 8060', err.message);});

  // Query points
  axios.post(URL_QUERY, event).catch((err) => {console.log('query 8061', err.message);});

  res.send({ status: "OK" });

});

app.listen(8070, () => {
  console.log("Listening on 8070");
});

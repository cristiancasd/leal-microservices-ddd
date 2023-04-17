require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  //Add    EVENT - 'PointsAdded'
  //Redeem EVENT - 'PointsRedeem'
  //Query  EVENT - 'PointsAdded'

  console.log('event recibido : ',event)

  //Redeem points
  axios.post(process.env.URL_SRV_REDEEM_POINTS+"/events", event).catch((err) => {console.log(' Redeem 8062', err.message);});

  // add points
  axios.post(process.env.URL_SRV_ADD_POINTS+"/events", event).catch((err) => {console.log(' add 8060', err.message);});

  // Query points
  axios.post(process.env.URL_SRV_QUERY+"/events", event).catch((err) => {console.log('query 8061', err.message);});

  res.send({ status: "OK" });

});

app.listen(8070, () => {
  console.log("Listening on 8070");
});

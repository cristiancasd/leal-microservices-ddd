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

  //CLient
  //axios.post("http://localhost:8063/events", event).catch((err) => {console.log(err.message);});
  
  //Redeem points
  axios.post("http://localhost:8062/events", event).catch((err) => {console.log(' Redeem 8062', err.message);});

  // add points
  axios.post("http://localhost:8061/events", event).catch((err) => {console.log(' add 8061', err.message);});

  // Query points
  axios.post("http://localhost:8060/events", event).catch((err) => {console.log('query 8060', err.message);});

  res.send({ status: "OK" });

});

app.listen(8070, () => {
  console.log("Listening on 8070");
});

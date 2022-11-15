import { Meteor } from "meteor/meteor";
import { WebApp } from "meteor/webapp";
import { deviceInformationdb } from "../lib/database.js";


/*WebApp.connectHandlers.use("/", (req, res, next) => {
    console.log(req);
    res.writeHead(200).end("Bruh");
});*/

WebApp.connectHandlers.use("/", (req, res, next) => {
    req.on('data', Meteor.bindEnvironment((data)=>{
      const body = JSON.parse(data);
      console.log(body);
      let patientID = body.patientID
      let deviceID = body.deviceID;
      console.log(patientID)
      console.log(deviceID)
      /* attempting to insert data from body into db. returns Exception in callback of async function: TypeError: Cannot read property 
'insert' of undefined
      deviceInformationdb.insert({body}) 
      */
    })); 
    res.on('end', Meteor.bindEnvironment(()=>{
      res.setHeader('Content-Type', 'application/json')
      res.writeHead(200)
      res.end(JSON.stringify({status : 'ok'}))
    }));

});


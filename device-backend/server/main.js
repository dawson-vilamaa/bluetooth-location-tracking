import { Meteor } from 'meteor/meteor';
import '../lib/database.js';
import { deviceInformationdb } from "../lib/database"
import { get } from 'jquery';

Meteor.startup(() => {
  // code to run on server at startup
  deviceInformationdb.remove({});

  for (let i = 0; i < 6; i++) {
    var patientID = "XXXXXXX".replace(/X/g, function () {
      return "0123456789ABCDEF".charAt((Math.random() * 16))
    });
    var macAddress = "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
      return "0123456789ABCDEF".charAt((Math.random() * 16))
    });
    var macAddress = "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
      return "0123456789ABCDEF".charAt((Math.random() * 16))
    });

    const firstNames = ["Michael", "Christopher", "Jessica", "Matthew", "Ashley", "Jennifer", "Joshua", "Amanda", "Daniel", "David", "James", "Robert", "John",
  "Joseph", "Andrew", "Ryan", "Brandon", "Jason", "Justin", "Sarah", "William", "Jonathan", "Stephanie", "Brian", "Nicole", "Nicholas", "Anthony", "Heather",
  "Eric", "Elizabeth", "Adam", "Megan", "Melissa", "Kevin", "Steven", "Thomas", "Timothy", "Christina", "Kyle", "Rachel", "Laura", "Lauren", "Amber", "Brittany",
  "Danielle", "Richard", "Kimberly", "Jeffrey", "Amy", "Crystal", "Michelle", "Tiffany", "Jeremy", "Benjamin", "Mark", "Emily", "Aaron"];

const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez",
  "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis",
  "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera",
  "Campbell", "Mitchell", "Carter", "Roberts"];

  const getRandomNumber = (max) => Math.floor(Math.random() * max);


//getting random names
function getRandomName(arr1, arr2) {

  let firstName = arr1[getRandomNumber(arr1.length)];
  let lastName = arr2[getRandomNumber(arr2.length)];

  let name = firstName + " " + lastName;

  return name;
}

//generate random DoB
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toDateString();
}

//generate age
function ageCalculator(DOB) {
  var dob = new Date(DOB);

  //calculate month difference from current date in time
  var month_diff = Date.now() - dob.getTime();

  //convert the calculated difference in date format
  var age_dt = new Date(month_diff);

  //extract year from date    
  var year = age_dt.getUTCFullYear();

  //now calculate the age of the user
  var age = Math.abs(year - 1970);

  //display the calculated age
  return age;
}

 


    var DOB = randomDate(new Date(1970, 0, 1), new Date());

    var age = ageCalculator(DOB);

    var physicianName = "Dr. " + getRandomName(firstNames, lastNames);

    //random number

    deviceInformationdb.insert({

      
      "patientInformation": {
        "macAddress": macAddress,
        "patientID": patientID,
        "DOB": DOB,
        "age": age,
        "physicianName": physicianName
      }

    });
  }
});


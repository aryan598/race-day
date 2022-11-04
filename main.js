let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 19;

if (registeredEarly && runnersAge > 18){
  raceNumber += 1000;
};

if (registeredEarly && runnersAge > 18){
  console.log(`Racer Number ${raceNumber} will race at 9:30am`);
}
else if(!registeredEarly && runnersAge > 18){
  console.log(`Racer Number ${raceNumber} will race at 11:00am`);
}
else if (runnersAge < 18){
  console.log(`Racer Number ${raceNumber} will race at 12:30pm`);
}
else {
  console.log(`Racer Number ${raceNumber} see the registration desk`)
};


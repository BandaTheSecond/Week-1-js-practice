function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
  
    if (speed < speedLimit) {
      console.log("Ok");
      return;
    }
  
    let demeritPoints = Math.floor((speed - speedLimit) / kmPerPoint);
  
    if (demeritPoints > 12) {
      console.log("License suspended");
    } else {
      console.log(`Points: ${demeritPoints}`);
    }
  }
  checkSpeed(80);  // Points: 2
checkSpeed(120); //  Points: 10
checkSpeed(135); //  License suspended
checkSpeed(65);  //  Ok
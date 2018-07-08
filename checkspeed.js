// speed limit = 70 = Ok
// 1 point every full increments of 5 
// 12 points = License suspended

checkspeed(70);
checkspeed(72);
checkspeed(80);
checkspeed(105);
checkspeed(180);

function checkspeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok');
        return;
    }
   
    const points = Math.floor((speed - speedLimit) / kmPerPoint); // note the use of const keyword
    if (points >= 12) console.log('License suspended');
    else console.log(points);
 
}
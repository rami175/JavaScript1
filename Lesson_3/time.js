function tellTime() {
    let currentD = new Date();
    let hours = currentD.getHours();
    let am = "AM";
    if (hours > 12) {
        hours -= 12;
    }
    else{
        am = "PM";
    }

    let currentTime = hours + ":" currentD.getMinutes() + am;
    document.getElementById("timeDisplay").innerHTML= currentTime;


}
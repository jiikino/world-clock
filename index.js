function updateTime() {


let date = moment().format("MMMM Do YYYY");
let time = moment().tz("America/Los_Angeles")

let losAngelesDateElement = document.querySelector(".date");
losAngelesDateElement.innerHTML = `${date}`;
let losAngelesTimeElement = document.querySelector(".time");
losAngelesTimeElement.innerHTML = time.format(" h:mm:ss [<small>]A[<small>]");
// Paris
let parisDate = moment().format("MMMM Do YYYY");
let parisTime = moment().tz("Europe/Paris");

let parisDateElement = document.querySelector("#paris .date");
let parisTimeElement = document.querySelector("#paris .time");

if (parisDateElement && parisTimeElement) {
    parisDateElement.innerHTML = `${parisDate}`;
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
};

}

updateTime()
setInterval(updateTime, 1000)


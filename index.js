function updateTime() {


let date = moment().format("MMMM Do YYYY");
let time = moment().tz("America/Los_Angeles")

let losAngelesDateElement = document.querySelector(".date");
let losAngelesTimeElement = document.querySelector(".time");
if (losAngelesDateElement && losAngelesTimeElement) {

       losAngelesDateElement.innerHTML = `${date}`;
       losAngelesTimeElement.innerHTML = time.format(" h:mm:ss [<small>]A[<small>]");
};


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

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = cityTimeZone;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
    </div>
    `;

}

let selectcityElement = document.querySelector("#city")
selectcityElement.addEventListener("change", updateCity);


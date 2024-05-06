// http://api.weatherapi.com/v1/current.json?key=9964023a8e324cec991170545240505&q=Mumbai&aqi=no

let temperatureField = document.querySelector(".temp");
let locationField = document.querySelector(".time_location p");
let dateAndTimeField = document.querySelector(".time_location span");
let conditionField = document.querySelector(".condition p");
let searchField = document.querySelector(".search_area");
// let searchbutton = document.querySelector(".search_button");
let form = document.querySelector("form")


form.addEventListener("submit", searchForLocation)

let target = "lucknow"
const fetchresult = async(targetLocation) =>
{
    let url= `http://api.weatherapi.com/v1/current.json?key=9964023a8e324cec991170545240505&q=${targetLocation}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    let locationName = data.location.name
    let temp = data.current.temp_c
    let time = data.location.localtime
    let condition = data.current.condition.text

    updateDetails(temp, locationName, time, condition)

}


function updateDetails(temp,locationName,time,condition){

    
    let splitDate= time.split(" ")[0]
    let splitTime= time.split(" ")[1]

    let currentDay = getDayname(new Date(splitDate).getDay())
   
    temperatureField.innerText = temp
    locationField.innerText = locationName
    dateAndTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText = condition

}

function searchForLocation(e){
    e.preventDefault()
    target = searchField.value
    fetchresult(target)
    
}


fetchresult(target)


function getDayname(number)
{
    switch(number){
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:               
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday' ;   
    }
}
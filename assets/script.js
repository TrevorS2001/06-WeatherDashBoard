var btn = document.querySelector("#btn-search");
var containerCities = document.querySelector("#cities");
var containerCurrent = document.querySelector("#targetCity");
var containerForecast = document.querySelector("#cityInfo");
var weatherCondition = [];
var dataStore = JSON.parse(localStorage.getItem('cities')) || [];

function start(){
    // load local store
    loadCity();
}

var loadCity = function(){

    cleaningElement(containerCities);

    if(dataStore){
        //creating unordered list
        var ulElement = document.createElement("ul");
        ulElement.classList.add("list-unstyled");
        ulElement.classList.add("w-100");

        for(var i=0; i<dataStore.length; i++){

            var liElement = document.createElement("li");
            liElement.innerHTML = "<button type='button' class='list-group-item list-group-item-action' attr='"+dataStore[i]+"'>" + dataStore[i] + "</button>";
            ulElement.appendChild(liElement);
        }
        containerCities.appendChild(ulElement);
    }
};


var saveCity = function(city){
    var flag = false
    if(dataStore){
        for(var i=0; i<dataStore.length; i++){
            if(dataStore[i] === city){
                flag = true;
            }
        }
        if (flag){
            displayAlertMessage("The City: " + city + " already exist")
        }
    }
    if(!flag){
        dataStore.push(city);
        localStorage.setItem("cities", JSON.stringify(dataStore));
    }
    loadCity();
};



var findUv = function(uv){

    var indexUv = parseFloat(uv);
    var bgColor;

    if(indexUv < 3){
        bgColor = "bg-success";
    }
    else if(indexUv > 6){
        bgColor = "bg-warning";
    }
    else if(indexUv > 8){
        bgColor = "bg-danger";
    } else{
        bgColor = "bg-dark";
    }

    return bgColor;
};

var weatherHtml = function(city, uv){

    cleaningElement(containerCurrent);
    cleaningElement(containerForecast);

    var ctn1 = document.createElement("div");
    ctn1.classList.add("col-6");
    var ctn2 = document.createElement("div");
    ctn2.classList.add("col-6");

    var cityEl = document.createElement("h2");
    var imageCurrent = document.createElement("img");

    cityEl.textContent = city + "(" + weatherCondition[0].dateT + ")";

    imageCurrent.setAttribute("src", weatherCondition[0].icon);

    imageCurrent.classList.add("bg-info");
};

var searchForDate9AM = function(str){
    var hour = str.split(" ")[1].split(":")[0];
    var flag = false;

    if (hour === "09"){
        flag === true;
    }
    return flag;
};

var formatDate = function(strDate){
    var newDate = strDate.split(" ")[0].split("-");

    return (newDate[1] +"/" + newDate[2] + "/" + newDate[0]);
};


var displayAlertMessage = function(msg){
    alert(msg);
};

var callApiFetch = function(city){

    var url;
    if(location.protocol === 'http:'){
        
    }
}
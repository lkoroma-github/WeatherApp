'use strict';
/*global Model, View*/

const m = new Model();
const v = new View();

//If extended to backend can include auto-load city names from json file

/*const cities = require('/node_modules/cities.json');
const {cityData} = cities;
console.log(cityData);*/

class Controller{

    init(){
        console.log("Controller initialized");
    }

    async query(){
        let cardData = await m.getApiData();
        this.parseQuery(cardData);
    }

    parseQuery(cardData){
        console.log("Here", cardData);
        v.addCity(cardData, 'weather-cards');
        return;
    }

}

const c = new Controller();

m.init();
v.init();
c.init();
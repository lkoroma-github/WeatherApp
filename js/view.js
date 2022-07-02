'use strict';

class View{
    init(){
        console.log("View initialized");
    }

    addCity(data, id){
        //document.getElementById(id).insertAdjacentHTML('beforeend', data);
        document.getElementById(id).innerHTML = data;
    }


}
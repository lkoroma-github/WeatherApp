'use strict';

class View{
    init(){
        console.log("View initialized");
    }

    addCity(data, id){
        console.log(data)
        document.getElementById(id).insertAdjacentHTML('beforeend', data);
    }


}
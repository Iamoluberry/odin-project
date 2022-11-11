function player(name, marker){
    this.name = name;
    this.marker= marker;
    this.sayname = function () {
        console.log(name)
    }
}



const player1 = new player(playerName(), "x")

player1.sayname()


function playerName(){
    document.getElementById("myinput").value;
}



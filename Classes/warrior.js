const Hero = require("./hero.js");

class Warrior extends Hero {
    constructor(name){

        super(10,5,10,5)
        this.name = name;
    }
    
    levelUp = () => {
        this.str += 2;
        this.dex ++;
        this.con += 2;
        this.int ++;
    }
}

module.exports=Warrior;
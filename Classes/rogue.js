const Hero = require("./hero.js");

class Rogue extends Hero {
    constructor(name){
        let str = 5;
        let dex = 10;
        let con = 5;
        let int = 10;

        super(str,dex,con,int)
        this.name = name;
    }

    levelUp = () => {
        this.str ++;
        this.dex += 2;
        this.con ++;
        this.int += 2;
    }
}

module.exports=Rogue;
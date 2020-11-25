const Hero = require("./hero.js");

class Mage extends Hero {
    constructor(name){
        let str = 5;
        let dex = 5;
        let con = 10;
        let int = 10;

        super(str,dex,con,int)
        this.name = name;
    }
    
    levelUp = () => {
        this.str ++;
        this.dex ++;
        this.con += 2;
        this.int += 2;
    }
}

module.exports=Mage;
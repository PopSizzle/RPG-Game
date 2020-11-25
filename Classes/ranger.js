const Hero = require("./hero.js");

class Ranger extends Hero {
    constructor(name){
        let str = 5;
        let dex = 10;
        let con = 10;
        let int = 5;

        super(str,dex,con,int)
        this.name = name;
    }
    
    levelUp = () => {
        this.str ++;
        this.dex += 2;
        this.con += 2;
        this.int ++;
    }
}

module.exports=Ranger;
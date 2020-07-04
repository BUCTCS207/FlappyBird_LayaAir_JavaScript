/**
*
* @ author:LHT
* @ email:buct_cs_207@163.com
* @ data: 2020-07-01 09:35
*/
export default class Repeating extends Laya.Script {

    constructor() {
        super();
    }

    onAwake() {
        this.width = this.owner.width
    }

    onUpdate(){
        if (this.owner.x <= -this.width){
            this.owner.x += 2*this.width
        }
    }
}
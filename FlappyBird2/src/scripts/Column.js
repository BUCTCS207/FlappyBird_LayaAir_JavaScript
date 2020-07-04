/**
*
* @ author:LHT
* @ email:buct_cs_207@163.com
* @ data: 2020-07-01 11:30
*/
export default class Column extends Laya.Script {

    constructor() {
        super();
        this.canAddScore=true;
    }

    onAwake() {
    }

    onUpdate(){
        if (this.owner.x <= -255){
            this.owner.removeSelf()
            Laya.Pool.recover(Column, this.owner)
        }
        if (this.canAddScore&&this.owner.x<=75){
            //计分
            this.canAddScore=false
            Laya.stage.event("AddScore")
            Laya.SoundManager.playSound("Audio/score.mp3", 1)
        }
    }
}
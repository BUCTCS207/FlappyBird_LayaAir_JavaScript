import BirdCtrl from "./BirdCtrl";

/**
*
* @ author:LHT
* @ email:buct_cs_207@163.com
* @ data: 2020-07-01 09:28
*/
export default class AutoMove extends Laya.Script {

    constructor() {
        super();
    }

    onAwake() {
        this.owner.getComponent(Laya.RigidBody).linearVelocity={x:-3, y:0}
        Laya.stage.on("Again", this, function(){
            this.owner.getComponent(Laya.RigidBody).linearVelocity={x:-3, y:0}
        })
    }
    onUpdate(){
        if (BirdCtrl.getGameover()){
            this.owner.getComponent(Laya.RigidBody).linearVelocity={x:0, y:0}
        }
    }
}